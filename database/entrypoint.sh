#!/bin/bash
set -e

function start_mongodb {
  mongod --replSet rs0 --bind_ip_all --logpath /dev/null
}

function mongo_is_ready {
  mongosh --eval "print(\"waited for connection\")"
}

function initiate_replica_set {
  mongosh --eval "
    rs.initiate({
    _id: 'rs0',
    members: [
      {_id: 0, host: 'database:27017'},
      {_id: 1, host: 'database1:27017'},
      {_id: 2, host: 'database2:27017'}
    ]
    })

    console.log('Replica set initiated');
  "
}

function primary_elected {
  mongosh --eval "rs.status()" | grep PRIMARY
}

function create_user_if_primary {
  mongosh --eval "
    if (rs.isMaster().ismaster) {
      db = db.getSiblingDB(process.env.MONGO_INITDB_DATABASE)

      db.createUser({ 
          user: process.env.DB_USERNAME,
          pwd: process.env.DB_PASSWORD,
          roles: [{ role: 'readWrite', db: process.env.MONGO_INITDB_DATABASE }] 
      }, { w: 'majority', wtimeout: 5000 });

      console.log('User created');
    }
  "
}

start_mongodb &

until mongo_is_ready; do sleep 1; done

if [ "$IS_REPLICA_SET_INITIATOR" = "true" ]; then initiate_replica_set; fi

until primary_elected; do sleep 1; done

create_user_if_primary

sleep infinity
#!/bin/bash
set -e

function start_mongodb {
  mongod --configsvr --replSet "$REPLICASET" --bind_ip_all --logpath /dev/null
}

function mongo_is_ready {
  echo "Waiting for mongo config server to be ready..."
  mongosh --port 27019 --eval "print(\"Mongo config server is ready\")"
}

function initiate_replica_set {
  mongosh --port 27019 --eval "
    rs.initiate({
      _id: '$REPLICASET',
      configsvr: true,
      members: [
        {_id: 0, host: '$NODE_0:27019'},
        {_id: 1, host: '$NODE_1:27019'},
        {_id: 2, host: '$NODE_2:27019'}
      ]
    })

    console.log('Replica set initiated');
  "
}

start_mongodb &

until mongo_is_ready; do sleep 1; done

if [ "$IS_REPLICA_SET_INITIATOR" = "true" ]; then initiate_replica_set; fi

sleep infinity
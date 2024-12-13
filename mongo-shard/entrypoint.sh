#!/bin/bash
set -e

function start_mongodb {
  mongod --shardsvr --replSet "$REPLICASET" --bind_ip_all --logpath /dev/null
}

function mongo_is_ready {
  echo "Waiting for mongo shard to be ready..."
  mongosh --port 27018 --eval "print(\"Mongo shard is ready.\")"
}

function initiate_replica_set {
  mongosh --port 27018 --eval "
    rs.initiate({
      _id: '$REPLICASET',
      members: [
        {_id: 0, host: '$NODE_0:27018'},
        {_id: 1, host: '$NODE_1:27018'}
      ]
    })

    console.log('Replica set initiated');
  "
}

start_mongodb &

until mongo_is_ready; do sleep 1; done

if [ "$IS_REPLICA_SET_INITIATOR" = "true" ]; then initiate_replica_set; fi

sleep infinity
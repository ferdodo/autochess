#!/bin/bash
set -e

function start_mongodb {
  mongos --configdb "$CONFIG_SERVER_REPLICA_SET/$CONFIG_SERVER_NODE_0:27019,$CONFIG_SERVER_NODE_1:27019,$CONFIG_SERVER_NODE_2:27019" --bind_ip_all --logpath /dev/null
}

function mongo_is_ready {
  echo "Waiting for mongo router to be ready..."
  mongosh --eval "print(\"Mongo router is ready\")"
}

function create_user_if_initiator {
  mongosh --eval "
    if ('$IS_SHARDING_INITIATOR' == 'true') {
      console.log('creating user');

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

add_shards_to_router_if_initiator() {
  mongosh --eval "
    if ('$IS_SHARDING_INITIATOR' == 'true') {
      sh.addShard('$SHARD_REPLICA_SET_0/$SHARD_0_NODE_0:27018,$SHARD_0_NODE_1:27018')
      sh.addShard('$SHARD_REPLICA_SET_1/$SHARD_1_NODE_0:27018,$SHARD_1_NODE_1:27018')
    }
  "
}

enable_sharding() {
  mongosh --eval "
    if ('$IS_SHARDING_INITIATOR' == 'true') {
      console.log('initiating sharding');
      sh.enableSharding('$MONGO_INITDB_DATABASE')
      sh.shardCollection('${MONGO_INITDB_DATABASE}.queuer', { _id: 'hashed' })
      sh.shardCollection('${MONGO_INITDB_DATABASE}.pool', { _id: 'hashed' })
      sh.shardCollection('${MONGO_INITDB_DATABASE}.game', { _id: 'hashed' })
      console.log('Added shard to router');
    }
  "
}


start_mongodb &

until mongo_is_ready; do sleep 4; done

add_shards_to_router_if_initiator

enable_sharding

create_user_if_initiator

sleep infinity
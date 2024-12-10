import { MikroORM } from "@mikro-orm/mongodb";
import { GameEntity } from "../entities/game.js";
import { QueuerEntity } from "../entities/queuer.js";
import { PoolEntity } from "../entities/pool.js";

export function initMikro(): Promise<MikroORM> {
	return MikroORM.init({
		entities: [GameEntity, QueuerEntity, PoolEntity],
		dbName: process.env.MONGODB_DATABASE,
		clientUrl: `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@database:27017,database1:27017,database2:27017/?authSource=${process.env.MONGODB_DATABASE}&replicaSet=rs0`,
	});
}

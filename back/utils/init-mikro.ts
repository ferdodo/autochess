import { MikroORM } from "@mikro-orm/mongodb";
import { GameEntity } from "../entities/game.js";
import { QueuerEntity } from "../entities/queuer.js";
import { PoolEntity } from "../entities/pool.js";

export async function initMikro(): Promise<MikroORM> {
	const orm = await MikroORM.init({
		entities: [GameEntity, QueuerEntity, PoolEntity],
		dbName: process.env.MONGODB_DATABASE,
		clientUrl: `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@mongo-router-node0:27017,mongo-router-node1:27017/?authSource=${process.env.MONGODB_DATABASE}`,
	});

	return orm;
}

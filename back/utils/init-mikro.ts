import { MikroORM } from "@mikro-orm/mongodb";
import { GameEntity } from "../entities/game";
import { QueuerEntity } from "../entities/queuer";
import { PoolEntity } from "../entities/pool";

export function initMikro(): Promise<MikroORM> {
	return MikroORM.init({
		entities: [GameEntity, QueuerEntity, PoolEntity],
		dbName: process.env.MONGODB_DATABASE,
		clientUrl: `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@database:27017/admin`,
	});
}

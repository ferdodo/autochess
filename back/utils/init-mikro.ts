import { MikroORM } from "@mikro-orm/mongodb";
import { Game } from "../repositories/game-repository";
import { Queuer } from "../repositories/queuer-repository";

export function initMikro(): Promise<MikroORM> {
	return MikroORM.init({
		entities: [Game, Queuer],
		dbName: process.env.MONGODB_DATABASE,
		clientUrl: `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@database:27017/admin`,
	});
}

import { defineConfig } from "@mikro-orm/postgresql";
import { GameEntity } from "./entities/game.js";
import { QueuerEntity } from "./entities/queuer.js";
import { PoolEntity } from "./entities/pool.js";
import { Migrator } from "@mikro-orm/migrations";

export default defineConfig({
	entities: [GameEntity, QueuerEntity, PoolEntity],
	extensions: [Migrator],
	host: "citus",
	dbName: process.env.MONGODB_DATABASE,
	user: process.env.MONGODB_USERNAME,
	password: process.env.MONGODB_PASSWORD,
	migrations: {
		tableName: "mikro_orm_migrations",
		path: "./migrations",
		transactional: true,
		allOrNothing: true,
	},
});

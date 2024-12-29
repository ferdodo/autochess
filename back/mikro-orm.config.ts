import { defineConfig } from "@mikro-orm/postgresql";
import { GameEntity } from "./entities/game.js";
import { QueuerEntity } from "./entities/queuer.js";
import { PoolEntity } from "./entities/pool.js";
import { Migrator } from "@mikro-orm/migrations";
import { readFileSync } from "node:fs";

export default defineConfig({
	entities: [GameEntity, QueuerEntity, PoolEntity],
	extensions: [Migrator],
	host: process.env.DATABASE_HOST,
	dbName: process.env.DATABASE_DB_NAME,
	user: process.env.DATABASE_USERNAME,
	migrations: {
		tableName: "mikro_orm_migrations",
		path: "./migrations",
		transactional: true,
		allOrNothing: true,
	},
	driverOptions: {
		connection: {
			ssl: {
				ca: readFileSync("/certs/ca.crt"),
				key: readFileSync("/certs/secondary.key"),
				cert: readFileSync("/certs/secondary.crt"),
			},
		},
	},
});

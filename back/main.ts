import { initMikro } from "./utils/init-mikro.js";
import { initMongo } from "./utils/init-mongo.js";
import type { Db } from "mongodb";
import type { MikroORM } from "@mikro-orm/core";
import { createBackContext } from "./utils/create-back-context.js";
import { startServer } from "core/utils/start-server.js";

console.log("Server is starting...");

Promise.resolve()
	.then(async () => {
		const db: Db = await initMongo();
		const orm: MikroORM = await initMikro();
		const backContext = await createBackContext(orm, db);
		startServer(backContext);
		console.log("\n╭───────────────────╮");
		console.log("│ Autochess Backend |");
		console.log("╰───────────────────╯\n");
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});

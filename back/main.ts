import { initMikro } from "./utils/init-mikro.js";
import { initMongo } from "./utils/init-mongo.js";
import { createDataMapper } from "./utils/create-data-mapper.js";
import type { Db } from "mongodb";
import type { MikroORM } from "@mikro-orm/core";
import { createBackContext } from "./utils/create-back-context.js";
import { benchMarkDataMapper } from "./benchmark/benchmark-data-mapper.js";
import { benchmarkSignVerify } from "./benchmark/benchmark-sign-verify.js";
import { startServer } from "core/utils/start-server";

console.log("Starting...");

Promise.resolve().then(async () => {
	const db: Db = await initMongo();
	const orm: MikroORM = await initMikro();
	const dataMapper = createDataMapper(orm, db);
	//await benchMarkDataMapper(dataMapper);
	//await benchmarkSignVerify();
	const backContext = await createBackContext(orm, db);

	backContext.connections$.subscribe({
		next: (connection) => {
			console.log("Connection established");

			connection.messages$.subscribe({
				next: (message) => {
					console.log("Message received", Object.keys(message).pop());
				},
				error: (error) => {
					console.error("Message error", error);
				},
				complete: () => {
					console.log("Message stream closed");
				},
			});
		},
		error: (error) => {
			console.error("Connection error", error);
		},
		complete: () => {
			console.log("Connection closed");
		},
	});

	startServer(backContext);
	console.log("Server started");
});

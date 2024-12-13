import { initMikro } from "./utils/init-mikro.js";
import { initMongo } from "./utils/init-mongo.js";
import { createDataMapper } from "./utils/create-data-mapper.js";
import type { Db } from "mongodb";
import type { MikroORM } from "@mikro-orm/core";
import { withServerStarted } from "core/fixtures/with-server-started";
import { createBackContext } from "./utils/create-back-context.js";
import { asNewPlayerConnect } from "core/automations/as-new-player-connect";
import { benchMarkDataMapper } from "./benchmark/benchmark-data-mapper.js";
//import { asPlayerInitiateGame } from "core/automations/as-player-initiate-game";

console.log("Starting...");

Promise.resolve().then(async () => {
	const db: Db = await initMongo();
	const orm: MikroORM = await initMikro();
	const dataMapper = createDataMapper(orm, db);

	await benchMarkDataMapper(dataMapper);

	console.log("Success !");
});

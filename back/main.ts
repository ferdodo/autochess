import { initMikro } from "./utils/init-mikro.js";
import { initMongo } from "./utils/init-mongo.js";
import { createDataMapper } from "./utils/create-data-mapper.js";
import type { Db } from "mongodb";
import type { MikroORM } from "@mikro-orm/core";
//import { withServerStarted } from "core/fixtures/with-server-started";
import { createBackContext } from "./utils/create-back-context.js";

new Promise((resolve) => setTimeout(resolve, 1500)).then(async () => {
	const db: Db = await initMongo();
	const orm: MikroORM = await initMikro();

	const dataMapper = createDataMapper(orm, db);

	createBackContext(orm, db);

	//await withServerStarted(dataMapper);

	console.log("Success !");
});

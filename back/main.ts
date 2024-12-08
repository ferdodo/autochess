import { initMikro } from "./utils/init-mikro";
import { initMongo } from "./utils/init-mongo";
import type { Queuer } from "core/types/queuer";
import { createDataMapper } from "./utils/create-data-mapper";
import type { Db } from "mongodb";
import type { MikroORM } from "@mikro-orm/core";

new Promise((resolve) => setTimeout(resolve, 1500)).then(async () => {
	const db: Db = await initMongo();
	const orm: MikroORM = await initMikro();

	const queuer: Queuer = {
		publicKey: "PublicKey",
		nickname: "Nickname",
		createdAt: new Date().toISOString(),
	};

	const dataMapper = createDataMapper(orm, db);
	await dataMapper.createQueuer(queuer);
	const queuers = await dataMapper.readQueuers();

	if (!queuers) {
		throw new Error("No queuers found !");
	}

	console.log("Success !");
});

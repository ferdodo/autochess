import { createBackContext } from "./utils/create-back-context.js";
import { startServer } from "core/utils/start-server.js";
import { createRedisClient } from "./utils/create-redis-client.js";
import { createDataMapper } from "./utils/create-data-mapper.js";
import { MikroORM } from "@mikro-orm/postgresql";
import mikroOrmConfig from "./mikro-orm.config.js";

console.log("Server is starting...");

Promise.resolve()
	.then(async () => {
		const orm = await MikroORM.init(mikroOrmConfig);
		const migrator = orm.getMigrator();
		await migrator.up();
		const redis = await createRedisClient();
		const redisPub = await createRedisClient();
		const dataMapper = await createDataMapper(orm, redis, redisPub);
		const backContext = await createBackContext(dataMapper);
		startServer(backContext);
		console.log("\n╭───────────────────╮");
		console.log("│ Autochess Backend |");
		console.log("╰───────────────────╯\n");
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});

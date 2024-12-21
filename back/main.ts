import { createBackContext } from "./utils/create-back-context.js";
import { startServer } from "core/utils/start-server.js";
import { createDataMapper } from "./utils/create-data-mapper.js";
import { MikroORM } from "@mikro-orm/postgresql";
import mikroOrmConfig from "./mikro-orm.config.js";
import { createBus } from "./utils/create-bus.js";

console.log("Server is starting...");

Promise.resolve()
	.then(async () => {
		const bus = await createBus();
		const orm = await MikroORM.init(mikroOrmConfig);
		const migrator = orm.getMigrator();
		await migrator.up();
		const dataMapper = await createDataMapper(orm, bus);
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

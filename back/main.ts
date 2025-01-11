import { createBackContext } from "./utils/create-back-context.js";
import { startServer } from "core/utils/start-server.js";
import { createDataMapper } from "./utils/create-data-mapper.js";
import { MikroORM } from "@mikro-orm/postgresql";
import mikroOrmConfig from "./mikro-orm.config.js";
import { createBus } from "./utils/create-bus.js";
import { migrate } from "./utils/migrate.js";

process.stdout.write("Server is starting...\n");

Promise.resolve()
	.then(async () => {
		const bus = await createBus();
		const orm = await MikroORM.init(mikroOrmConfig);
		await migrate(orm);
		const dataMapper = await createDataMapper(orm, bus);
		const backContext = await createBackContext(dataMapper);
		startServer(backContext);
		process.stdout.write("\n╭───────────────────╮\n");
		process.stdout.write("│ Autochess Backend |\n");
		process.stdout.write("╰───────────────────╯\n\n");
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});

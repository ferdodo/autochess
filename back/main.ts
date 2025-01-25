import { createBackContext } from "./utils/create-back-context.js";
import { startServer } from "core/utils/start-server.js";
import { createDataMapper } from "./utils/create-data-mapper.js";
import { MikroORM } from "@mikro-orm/postgresql";
import mikroOrmConfig from "./mikro-orm.config.js";
import { createBus } from "./utils/create-bus.js";
import { migrate } from "./utils/migrate.js";
import { initTelemetry } from "./utils/init-telemetry.js";
import { saveLog } from "./utils/save-log.js";

(async function main() {
	try {
		const bus = await createBus();
		const orm = await MikroORM.init(mikroOrmConfig);
		await migrate(orm);
		const dataMapper = await createDataMapper(orm, bus);
		const backContext = await createBackContext(dataMapper);
		await initTelemetry(backContext);
		startServer(backContext);
		saveLog("Server started");
	} catch (error) {
		saveLog(error);
		process.exit(1);
	}
})();

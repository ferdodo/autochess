import { createBackContext } from "./utils/create-back-context.js";
import { startServer } from "core/utils/start-server.js";
import { createRedisClient } from "./utils/create-redis-client.js";
import { createDataMapper } from "./utils/create-data-mapper.js";

console.log("Server is starting...");

Promise.resolve()
	.then(async () => {
		const redis = await createRedisClient();
		const backContext = await createBackContext(redis);
		startServer(backContext);
		console.log("\n╭───────────────────╮");
		console.log("│ Autochess Backend |");
		console.log("╰───────────────────╯\n");
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});

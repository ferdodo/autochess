import http from "node:http";
import { formatMetrics } from "./format-metrics.js";
import type { BackContext } from "core/types/back-context.js";

export async function initTelemetry(backContext: BackContext) {
	await new Promise((resolve, reject) => {
		setTimeout(
			reject,
			5000,
			new Error("Timed out while starting telemetry server !"),
		);

		const server = http.createServer((req, res) => {
			if (req.url === "/metrics") {
				res.writeHead(200, { "Content-Type": "text/plain" });
				res.end(formatMetrics(backContext.metrics));
			}

			res.writeHead(404);
			res.end();
		});

		server.listen(23053, () => {
			resolve(undefined);
		});
	});
}

import http from "node:http";
import { serializeError } from "serialize-error";

export function saveLog(log) {
	const payload = {
		streams: [
			{
				stream: {
					app: "autochess",
				},
				values: [
					[`${Date.now() * 1000000}`, JSON.stringify(serializeError(log))],
				],
			},
		],
	};

	const options = {
		hostname: "loki",
		port: 3100,
		path: "/loki/api/v1/push",
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
	};

	new Promise((resolve, reject) => {
		const req = http.request(options, (res) => {
			if (res.statusCode === 204) {
				resolve(undefined);
			} else {
				reject();
			}
		});

		req.on("error", reject);

		req.write(JSON.stringify(payload));
		req.end();
	}).catch(() => console.log(log));
}

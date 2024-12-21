import axon from "axon";
import { Observable, share } from "rxjs";
import type { BackEvent } from "../types/back-events.js";
import type { Bus } from "../types/pub-sub.js";

export async function createBus(): Promise<Bus> {
	const publisher = axon.socket("pub");
	const port = 12345;
	publisher.bind(port, "0.0.0.0");

	const publish = (topic: BackEvent, message: string) => {
		publisher.send(topic, message);
	};

	const nodes: string[] = (process.env.BACK_HOSTNAMES || "").split(",");

	const sockets = await Promise.all(
		nodes.map(async (node) => {
			const socket = axon.socket("sub");
			socket.connect(port, node);
			socket.subscribe("*");

			await new Promise((resolve, reject) => {
				socket.on("connect", () => resolve(undefined));

				socket.on("error", (cause) => {
					reject(new Error(`Failed to connect to ${node}`, { cause }));
				});

				socket.on("close", (cause) => {
					console.error(new Error(`Connection to ${node} closed!`, { cause }));
					process.exit(1);
				});
			});

			return socket;
		}),
	);

	const events$ = new Observable<[BackEvent, string]>((subscriber) => {
		for (const socket of sockets) {
			socket.on("message", (topic, message) => {
				subscriber.next([topic, message]);
			});
		}
	}).pipe(share());

	return { publish, events$ };
}

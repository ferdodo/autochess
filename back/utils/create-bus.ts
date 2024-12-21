import axon from "axon";
import { Observable, share, firstValueFrom, filter, timeout } from "rxjs";
import { BackEvent } from "../types/back-events.js";
import type { Bus } from "../types/pub-sub.js";

export async function createBus(): Promise<Bus> {
	const publisher = axon.socket("pub");
	const port = 12345;
	publisher.bind(port, "0.0.0.0");

	const publish = (topic: BackEvent, message: string) => {
		publisher.send(topic, message);
	};

	const nodes: string[] = (process.env.BACK_HOSTNAMES || "").split(",");

	const subscribers = await Promise.all(
		nodes.map(async (node) => {
			const subscriber = axon.socket("sub");
			subscriber.connect(port, node);
			subscriber.subscribe("*");

			await new Promise((resolve, reject) => {
				subscriber.on("connect", () => resolve(undefined));
				subscriber.on("error", (err) => reject(err));

				subscriber.on("close", () => {
					console.error(`Pubsub connection to ${node} closed, exiting nodejs.`);
					setTimeout(() => process.exit(1), 5000);
				});
			});

			return subscriber;
		}),
	);

	const events$ = new Observable<[BackEvent, string]>((_subscriber) => {
		for (const subscriber of subscribers) {
			subscriber.on("message", (topic, message) => {
				_subscriber.next([topic, message]);
			});
		}
	}).pipe(share());

	const pingReceived = firstValueFrom(
		events$.pipe(
			filter(([topic]) => topic === BackEvent.Ping),
			timeout(5000),
		),
	);

	publish(BackEvent.Ping, "Hello, world!");
	await pingReceived;
	return { publish, events$ };
}

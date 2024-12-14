import { Observable, share } from "rxjs";
import type { Connection } from "core/types/connection";
import { uid } from "uid";
import type { ClientMessage } from "core/types/client-message";
import type { ServerMessage } from "core/types/server-message";

async function _createWsClient(
	wsProtocol: string,
	wsPort: string,
	webDomain: string,
): Promise<Connection<ServerMessage, ClientMessage>> {
	const showPort =
		(wsProtocol === "ws" && Number(wsPort) !== 80) ||
		(wsProtocol === "wss" && Number(wsPort) !== 443);

	const wsUrl = `${wsProtocol}://${webDomain}${showPort ? `:${wsPort}` : ""}/ws`;
	const socket: WebSocket = new WebSocket(wsUrl);

	const waitDisconnected = new Promise((resolve) => {
		socket.onclose = () => resolve(undefined);
	});

	const waitConnected = new Promise((resolve, reject) => {
		//const timeout = setTimeout(() => {
		//	reject(new Error("Connection timeout !"));
		//	socket.close();
		//}, 3000);

		socket.onopen = () => {
			//clearTimeout(timeout);
			resolve(undefined);
		};

		socket.onerror = (error) => {
			//reject(error);
		};

		socket.onclose = (event) => {
			//clearTimeout(timeout);
			reject(event);
		};

		waitDisconnected.finally(() => reject(new Error("Connection closed !")));
	});

	const messages$ = new Observable<ServerMessage>((subscriber) => {
		socket.onmessage = (event) => {
			if (event.data.startsWith("ERROR")) {
				console.error(`SERVER ${event.data}`);
				return;
			}

			const deserialized: ServerMessage = JSON.parse(event.data);
			subscriber.next(deserialized);
		};

		waitDisconnected.finally(() => subscriber.complete());
	}).pipe(share());

	let keepAliveInteval: ReturnType<typeof setInterval> | undefined;

	/**
	 * Prevent web servers or reverse proxy automatically close
	 * inactive sockets by keeping it active.
	 */
	waitConnected
		.then(() => {
			keepAliveInteval = setInterval(() => socket.send("KEEP_ALIVE"), 25000);
			return waitDisconnected;
		})
		.finally(() => clearInterval(keepAliveInteval));

	await waitConnected;

	return {
		id: uid(),
		messages$,
		async send(message: ClientMessage) {
			await waitConnected;
			const serialized = JSON.stringify(message);
			socket.send(serialized);
		},
	};
}

function _retryStrategy(fn: typeof _createWsClient): typeof _createWsClient {
	return async function retry(...args: Parameters<typeof fn>) {
		let lastError: Error | undefined;

		for (let i = 0; i < 30; i++) {
			try {
				return await fn(...args);
			} catch (error) {
				console.error(error);

				console.error(
					`${i} Failed to connect ${args[0]}://${args[2]}:${args[1]}`,
				);
				await new Promise((resolve) => setTimeout(resolve, 1000));
			}
		}

		throw lastError || new Error("Too many retries !");
	};
}

export const createWsClient = _createWsClient;

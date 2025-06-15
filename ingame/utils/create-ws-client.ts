import { Observable, share } from "rxjs";
import type { Connection } from "core/src/types/Connection";
import { uid } from "uid";
import type { ClientMessage } from "core/src/types/ClientMessage";
import type { ServerMessage } from "core/src/types/ServerMessage";
import { pickBackend } from "./pick-backend";

async function _createWsClient(): Promise<
	Connection<ServerMessage, ClientMessage>
> {
	const wsProtocol = import.meta.env.VITE_WEBSOCKET_PROTOCOL;
	const [webDomain, wsPort] = pickBackend();

	const showPort =
		(wsProtocol === "ws" && Number(wsPort) !== 80) ||
		(wsProtocol === "wss" && Number(wsPort) !== 443);

	const wsUrl = `${wsProtocol}://${webDomain}${showPort ? `:${wsPort}` : ""}/ws`;
	const socket: WebSocket = new WebSocket(wsUrl);

	const waitDisconnected = new Promise((resolve) => {
		socket.onclose = () => resolve(undefined);
	});

	const waitConnected = new Promise((resolve, reject) => {
		socket.onopen = () => {
			resolve(undefined);
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
		.finally(() => clearInterval(keepAliveInteval))
		.catch(() => {});

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

export const createWsClient = _createWsClient;

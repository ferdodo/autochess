import { WebSocketServer } from "ws";
import { Observable, share } from "rxjs";
import type { Connection } from "core/types/connection";
import { validateClientMessage } from "core/utils/validate-client-message";
import { createServer } from "node:https";
import { readFileSync } from "node:fs";
import { uid } from "uid";
import type { Server } from "node:https";

export function createWsServer<I, O>(): Observable<Connection<I, O>> {
	const wss = createWebSocketServer();

	return new Observable<Connection<I, O>>((connexionSubscriber) => {
		wss.on("connection", (ws) => {
			const messages$ = new Observable<I>((messageSubscriber) => {
				ws.on("message", async function message(data) {
					if (data.toString() === "KEEP_ALIVE") {
						return;
					}

					let parsed: I;

					try {
						parsed = JSON.parse(data);
					} catch (parseErr) {
						ws.send("ERROR: Failed to parse payload !");
						return;
					}

					const [valid, errors] = await validateClientMessage(parsed);

					if (valid) {
						messageSubscriber.next(parsed);
					} else {
						ws.send(`ERROR: ${errors}`);
					}
				});

				ws.on("close", () => {
					messageSubscriber.complete();
				});
			}).pipe(share());

			const send = (payload: O) => {
				const serialized = JSON.stringify(payload);
				ws.send(serialized);
			};

			const id: string = uid();

			connexionSubscriber.next({
				messages$,
				send,
				id,
			});
		});
	}).pipe(share());
}

function createWebSocketServer() {
	let server: Server;

	switch (process.env.VITE_WEBSOCKET_PROTOCOL) {
		case "ws":
			return new WebSocketServer({ port: 3000, path: "/ws" });
		case "wss":
			server = createServer({
				key: readFileSync("./certificates/privkey.pem"),
				cert: readFileSync("./certificates/fullchain.pem"),
			});

			server.listen(3000);

			return new WebSocketServer({ server, path: "/ws" });
		default:
			throw new Error("Invalid WS protocol !");
	}
}

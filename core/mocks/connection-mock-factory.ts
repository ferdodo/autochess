import type { Connection } from "../types/connection.js";
import { Subject } from "rxjs";
import type { Observable } from "rxjs";
import { filter, share, mergeMap, map } from "rxjs";
import type { ClientMessage } from "../types/client-message.js";
import type { ServerMessage } from "../types/server-message.js";
import { validateClientMessage } from "../utils/validate-client-message.js";
import { uid } from "uid";

export class ConnectionMockFactory {
	serverConnections = new Subject<Connection<ClientMessage, ServerMessage>>();
	totalValidationProcessingTime = 0;

	createServer(): Observable<Connection<ClientMessage, ServerMessage>> {
		return this.serverConnections.asObservable();
	}

	createClient(): [Connection<ServerMessage, ClientMessage>, () => void] {
		const _clientMessage$: Subject<ServerMessage> = new Subject();
		const _serverMessage$: Subject<ClientMessage> = new Subject();
		// @ts-ignore
		const env = process?.env?.NODE_ENV === "test";
		const totalAllowedProcessingTime = env ? 5 : Number.POSITIVE_INFINITY;

		this.serverConnections.next({
			id: uid(),
			messages$: _serverMessage$.pipe(
				mergeMap(async (message) => {
					const start = Date.now();

					const [valid, errors] =
						this.totalValidationProcessingTime < totalAllowedProcessingTime ||
						Math.random() < 0.05
							? await validateClientMessage(message)
							: [true, "none"];

					const end = Date.now();
					this.totalValidationProcessingTime += end - start;

					if (!valid) {
						console.error(errors);
					}

					return [valid, message] as [boolean, ClientMessage];
				}),
				filter(([valid]: [boolean, ClientMessage]) => valid),
				map(([_, message]) => message),
				share(),
			),
			send(message: ServerMessage) {
				_clientMessage$.next(message);
			},
		});

		return [
			{
				id: uid(),
				messages$: _clientMessage$.asObservable(),
				send(message: ClientMessage) {
					_serverMessage$.next(message);
				},
			},
			() => _serverMessage$.complete(),
		];
	}
}

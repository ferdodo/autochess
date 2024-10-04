import type { Subscription } from "rxjs";
import { map, mergeMap, filter, tap, finalize } from "rxjs/operators";
import { merge } from "rxjs";
import type { BackContext } from "../types/back-context";
import type { InitiateGameRequest } from "../types/initiate-game-request";

export function initiateGameHandle({
	connections$,
	gameDataMapper,
	queuerDataMapper,
	queuerConnections,
}: BackContext): Subscription {
	const handleRequests$ = connections$.pipe(
		mergeMap((connection) =>
			connection.messages$.pipe(
				map((message) => message.initiateGameRequest),
				filter(Boolean),
				tap(async ({ publicKey, nickname }: InitiateGameRequest) => {
					const createdAt = Date.now();

					if (await queuerDataMapper.save({ publicKey, nickname, createdAt })) {
						queuerConnections[publicKey] = connection;
					}
				}),
				finalize(() => {
					const publicKey = Object.keys(queuerConnections).find(
						(key) => queuerConnections[key] === connection,
					);

					if (publicKey) {
						delete queuerConnections[publicKey];
					}
				}),
			),
		),
	);

	const sendResponses$ = gameDataMapper.observeCreated().pipe(
		tap((game) => {
			for (const publicKey of game.publicKeys) {
				const connection = queuerConnections[publicKey];

				if (connection) {
					connection.send({ initiateGameResponse: { gameId: game.id } });
				}
			}
		}),
	);

	return merge(sendResponses$, handleRequests$).subscribe();
}

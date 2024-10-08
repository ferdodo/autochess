import type { Subscription } from "rxjs";
import { map, mergeMap, filter, tap, finalize } from "rxjs/operators";
import { merge } from "rxjs";
import type { BackContext } from "../types/back-context";
import type { InitiateGameRequest } from "../types/initiate-game-request";
import { checkInvalidSignature } from "../utils/check-invalid-signature";
import { checkTimestamp } from "../utils/check-timestamp";

export function initiateGameHandle({
	connections$,
	gameDataMapper,
	queuerDataMapper,
	queuerConnections,
	isValidSignature,
}: BackContext): Subscription {
	const handleRequests$ = connections$.pipe(
		mergeMap((connection) =>
			connection.messages$.pipe(
				map((message) => message.initiateGameRequest),
				filter(Boolean),
				checkInvalidSignature(isValidSignature),
				checkTimestamp(),
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
					connection.send({ initiateGameResponse: { playsig: game.playsig } });
				}
			}
		}),
	);

	return merge(sendResponses$, handleRequests$).subscribe();
}

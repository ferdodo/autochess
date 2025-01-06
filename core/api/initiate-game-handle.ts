import type { Subscription } from "rxjs";
import { map, mergeMap, filter, tap, finalize } from "rxjs/operators";
import { merge } from "rxjs";
import type { BackContext } from "../types/back-context.js";
import type { InitiateGameRequest } from "../types/initiate-game-request.js";
import { checkSignature } from "../utils/check-signature.js";

export function initiateGameHandle({
	connections$,
	dataMapper: { createQueuer, createdGame$, deleteQueuer },
	queuerConnections,
	isValidSignature,
	signMessage,
}: BackContext): Subscription {
	const handleRequests$ = connections$.pipe(
		mergeMap((connection) =>
			connection.messages$.pipe(
				map((message) => message.initiateGameRequest),
				filter(Boolean),
				checkSignature(isValidSignature),
				tap(async ({ publicKey, nickname }: InitiateGameRequest) => {
					const createdAt = new Date().toISOString();
					queuerConnections[publicKey] = connection;

					const saved = await createQueuer({
						publicKey,
						nickname,
						createdAt,
					});

					if (!saved) {
						delete queuerConnections[publicKey];
					}
				}),
				finalize(async () => {
					const publicKey = Object.keys(queuerConnections).find(
						(key) => queuerConnections[key] === connection,
					);

					if (publicKey) {
						await deleteQueuer(publicKey);
						delete queuerConnections[publicKey];
					}
				}),
			),
		),
	);

	const sendResponses$ = createdGame$.pipe(
		tap(async (game) => {
			for (const publicKey of game.publicKeys) {
				const connection = queuerConnections[publicKey];

				if (connection) {
					connection.send({
						initiateGameResponse: {
							playsig: game.playsig,
							stamp: await signMessage({
								playsig: game.playsig,
								playerPublicKey: publicKey,
							}),
						},
					});
				}
			}
		}),
	);

	return merge(sendResponses$, handleRequests$).subscribe();
}

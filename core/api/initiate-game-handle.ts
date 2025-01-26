import type { Observable } from "rxjs";
import { map, mergeMap, filter, finalize } from "rxjs/operators";
import { merge } from "rxjs";
import type { BackContext } from "../types/back-context.js";
import type { InitiateGameRequest } from "../types/initiate-game-request.js";
import { checkSignature } from "../utils/check-signature.js";
import { Subject } from "rxjs";

export function initiateGameHandle({
	connections$,
	dataMapper: { createQueuer, createdGame$, deleteQueuer },
	queuerConnections,
	isValidSignature,
	signMessage,
	metrics,
}: BackContext): Observable<void> {
	const errors$: Subject<void> = new Subject();

	const handleRequests$ = connections$.pipe(
		mergeMap((connection) =>
			connection.messages$.pipe(
				map((message) => message.initiateGameRequest),
				filter(Boolean),
				checkSignature(isValidSignature),
				mergeMap(async ({ publicKey, nickname }: InitiateGameRequest) => {
					metrics.initiateGameRequestCount++;
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
					try {
						const publicKey = Object.keys(queuerConnections).find(
							(key) => queuerConnections[key] === connection,
						);

						if (publicKey) {
							await deleteQueuer(publicKey);
							delete queuerConnections[publicKey];
						}
					} catch (error) {
						errors$.error(error);
					}
				}),
			),
		),
	);

	const sendResponses$ = createdGame$.pipe(
		mergeMap(async (game) => {
			for (const publicKey of game.publicKeys) {
				const connection = queuerConnections[publicKey];

				if (connection) {
					metrics.initiateGameResponseCount++;
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

	return merge(sendResponses$, handleRequests$, errors$).pipe(
		map(() => undefined),
	);
}

import type { Subscription } from "rxjs";
import { map, mergeMap, filter, tap } from "rxjs/operators";
import type { BackContext } from "../types/back-context";
import { checkInvalidSignature } from "../utils/check-invalid-signature";
import { NEVER } from "rxjs";

export function observeGameHandle({
	connections$,
	dataMapper: { readGame, observeGame },
	isValidSignature,
	signMessage,
}: BackContext): Subscription {
	return connections$
		.pipe(
			mergeMap((connection) => {
				let subscribed = false;

				return connection.messages$.pipe(
					map((message) => message.observeGameSubscribe),
					filter(Boolean),
					checkInvalidSignature(isValidSignature),
					mergeMap(async ({ publicKey, playsig }) => {
						const game = await readGame(playsig);

						if (!game) {
							return NEVER;
						}

						if (!game.publicKeys.includes(publicKey)) {
							return NEVER;
						}

						connection.send({
							observeGameBroadcast: await signMessage({ game }),
						});

						if (subscribed) {
							return NEVER;
						}

						subscribed = true;

						return observeGame(playsig).pipe(
							tap(async (observedGame) => {
								connection.send({
									observeGameBroadcast: await signMessage({
										game: observedGame,
									}),
								});
							}),
						);
					}),
					mergeMap((observable) => observable),
				);
			}),
		)
		.subscribe();
}

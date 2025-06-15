import type { Observable } from "rxjs";
import { map, mergeMap, filter, mergeWith } from "rxjs/operators";
import type { BackContext } from "../types/BackContext.js";
import { checkSignature } from "../utils/checkSignature.js";
import { NEVER, from } from "rxjs";

export function observeGameHandle({
	connections$,
	dataMapper: { readGame, observeGame },
	isValidSignature,
}: BackContext): Observable<void> {
	return connections$.pipe(
		mergeMap((connection) => {
			let subscribed = false;

			return connection.messages$.pipe(
				map((message) => message.observeGameSubscribe),
				filter(Boolean),
				checkSignature(isValidSignature),
				mergeMap(async ({ publicKey, playsig }) => {
					const game = await readGame(playsig);

					if (!game) {
						return NEVER;
					}

					if (!game.publicKeys.includes(publicKey)) {
						return NEVER;
					}

					if (subscribed) {
						connection.send({
							observeGameBroadcast: { game },
						});

						return NEVER;
					}

					subscribed = true;

					return observeGame(playsig).pipe(
						mergeWith(from(readGame(playsig)).pipe(filter(Boolean))),
						mergeMap(async (observedGame) => {
							connection.send({
								observeGameBroadcast: {
									game: observedGame,
								},
							});
						}),
					);
				}),
				mergeMap((observable) => observable),
			);
		}),
	);
}

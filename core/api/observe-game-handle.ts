import type { Subscription } from "rxjs";
import { map, mergeMap, filter, first, tap } from "rxjs/operators";
import { merge } from "rxjs";
import type { BackContext } from "../types/back-context";
import { checkInvalidSignature } from "../utils/check-invalid-signature";

export function observeGameHandle({
	connections$,
	dataMapper,
	isValidSignature,
	signMessage,
}: BackContext): Subscription {
	return connections$
		.pipe(
			mergeMap((connection) => {
				const requests$ = connection.messages$.pipe(
					map((message) => message.observeGameSubscribe),
					filter(Boolean),
					checkInvalidSignature(isValidSignature),
				);

				const sendCurrent$ = requests$.pipe(
					tap(async ({ playsig }) => {
						const game = await dataMapper.readGame(playsig);

						if (game) {
							connection.send({
								observeGameBroadcast: await signMessage({ game }),
							});
						}
					}),
				);

				const subscribeToGame$ = requests$.pipe(
					first(),
					mergeMap(({ playsig }) => dataMapper.observeGame(playsig)),
					tap(async (game) => {
						connection.send({
							observeGameBroadcast: await signMessage({ game }),
						});
					}),
				);

				return merge(sendCurrent$, subscribeToGame$);
			}),
		)
		.subscribe();
}

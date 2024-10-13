import type { Subscription } from "rxjs";
import { map, mergeMap, filter, first, tap } from "rxjs/operators";
import { merge } from "rxjs";
import type { BackContext } from "../types/back-context";
import { checkInvalidSignature } from "../utils/check-invalid-signature";
import { checkTimestamp } from "../utils/check-timestamp";
import { checkGameHasPlayer } from "../utils/check-game-has-player";

export function observeGameHandle({
	connections$,
	dataMapper,
	isValidSignature,
}: BackContext): Subscription {
	return connections$
		.pipe(
			mergeMap((connection) => {
				const requests$ = connection.messages$.pipe(
					map((message) => message.observeGameSubscribe),
					filter(Boolean),
					checkInvalidSignature(isValidSignature),
					checkTimestamp(),
					checkGameHasPlayer(dataMapper),
				);

				const sendCurrent$ = requests$.pipe(
					tap(async ({ playsig }) => {
						const game = await dataMapper.readGame(playsig);

						if (game) {
							connection.send({ observeGameBroadcast: { game } });
						}
					}),
				);

				const subscribeToGame$ = requests$.pipe(
					first(),
					mergeMap(({ playsig }) => dataMapper.observeGame(playsig)),
					tap((game) => {
						connection.send({ observeGameBroadcast: { game } });
					}),
				);

				return merge(sendCurrent$, subscribeToGame$);
			}),
		)
		.subscribe();
}

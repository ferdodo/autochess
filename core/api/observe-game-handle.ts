import type { Subscription } from "rxjs";
import { map, mergeMap, filter, first, tap } from "rxjs/operators";
import type { BackContext } from "../types/back-context";
import { checkInvalidSignature } from "../utils/check-invalid-signature";
import type { ObserveGameSubscribe } from "../types/observe-game-subscribe";

export function observeGameHandle({
	connections$,
	gameDataMapper,
	isValidSignature,
}: BackContext): Subscription {
	return connections$
		.pipe(
			mergeMap((connection) =>
				connection.messages$.pipe(
					map((message) => message.observeGameSubscribe),
					filter(Boolean),
					first(),
					checkInvalidSignature(isValidSignature),
					mergeMap(({ playsig }: ObserveGameSubscribe) => {
						return gameDataMapper.observe(playsig);
					}),
					tap((game) => {
						connection.send({ observeGameBroadcast: { game } });
					}),
				),
			),
		)
		.subscribe();
}

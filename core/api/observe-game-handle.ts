import type { Subscription } from "rxjs";
import { map, mergeMap, filter, first, tap } from "rxjs/operators";
import { NEVER, of, merge } from "rxjs";
import type { BackContext } from "../types/back-context";
import { checkInvalidSignature } from "../utils/check-invalid-signature";
import type { ObserveGameSubscribe } from "../types/observe-game-subscribe";
import { checkTimestamp } from "../utils/check-timestamp";

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
					checkTimestamp(),
					mergeMap(async ({ playsig, publicKey }: ObserveGameSubscribe) => {
						const game = await gameDataMapper.read(playsig);

						if (!game?.publicKeys.includes(publicKey)) {
							return NEVER;
						}

						return merge(of(game), gameDataMapper.observe(playsig));
					}),
					mergeMap((game$) => game$),
					tap((game) => {
						connection.send({ observeGameBroadcast: { game } });
					}),
				),
			),
		)
		.subscribe();
}

import type { Observable } from "rxjs";
import { map, mergeMap, filter } from "rxjs/operators";
import type { BackContext } from "../types/back-context.js";
import { checkSignature } from "../utils/check-signature.js";
import { checkStamp } from "../utils/check-stamp.js";
import type { Appellation } from "../types/appellation.js";
import { getHeroCost } from "../utils/get-hero-cost.js";
import { HeroFactory } from "../utils/hero-factory.js";
import type { Game } from "../types/game.js";
import { ServerNotification } from "../types/server-notifications.js";

export function shopBuyHandle(context: BackContext): Observable<void> {
	const {
		connections$,
		dataMapper: { readAndUpdateGame },
		isValidSignature,
	} = context;

	return connections$.pipe(
		mergeMap((connection) =>
			connection.messages$.pipe(
				map((message) => message.shopBuyRequest),
				filter(Boolean),
				checkSignature(isValidSignature),
				checkStamp(context),
				mergeMap(async ({ item, publicKey, playsig }) => {
					const transaction = await readAndUpdateGame(playsig);

					if (!transaction) {
						return;
					}

					const { game, commit, abort } = transaction;

					try {
						const shop = game.playerShops[publicKey] || [];
						const appellation: Appellation | undefined = shop[item];

						if (!appellation) {
							await abort();
							return;
						}

						const playerMoney = game.playerMoney[publicKey] || 0;
						const cost = getHeroCost(appellation);

						if (playerMoney < cost) {
							await abort();
							return;
						}

						const bench = game.playerBenches[publicKey] || [];

						if (Object.values(bench).filter(Boolean).length >= 6) {
							connection.send({
								serverNotification: ServerNotification.FullBench,
							});

							await abort();
							return;
						}

						let firstEmptySlot = 0;

						while (bench[firstEmptySlot]) {
							firstEmptySlot++;
						}

						bench[firstEmptySlot] = new HeroFactory().build(appellation);

						const newGame: Game = {
							...game,
							playerMoney: {
								...game.playerMoney,
								[publicKey]: playerMoney - cost,
							},
							playerBenches: {
								...game.playerBenches,
								[publicKey]: bench,
							},
						};

						await commit(newGame);
					} catch (error) {
						await abort();
						throw error;
					}
				}),
			),
		),
	);
}

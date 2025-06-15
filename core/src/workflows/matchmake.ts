import type { Observable } from "rxjs";
import { filter, mergeMap } from "rxjs";
import { uid } from "uid";
import type { Hero } from "../types/Hero.js";
import type { Appellation } from "../types/Appellation.js";
import type { Level } from "../types/Level.js";
import { createPool } from "../utils/createPool.js";
import { HeroFactory } from "../utils/HeroFactory.js";
import { getRandomAppellation } from "../utils/getRandomAppellation.js";
import { Phase } from "../types/Phase.js";
import { getDate } from "../utils/getDate.js";
import type { BackContext } from "../types/BackContext.js";

export function matchmake(backContext: BackContext): Observable<void> {
	const {
		dataMapper: { queuers$, createGameWithPoolAndDeleteQueuers },
		lateMatchmakingTimer,
	} = backContext;

	return queuers$.pipe(
		lateMatchmakingTimer,
		filter((queuers) => queuers.length > 1),
		mergeMap(async (queuers) => {
			const players = queuers.slice(0, 8);

			const nicknames = players.reduce(
				(acc, player) => {
					acc[player.publicKey] = player.nickname;
					return acc;
				},
				<Record<string, string>>{},
			);

			const playerHeroes: Record<string, Hero[]> = {};
			const playerShops: Record<string, Appellation[]> = {};
			const playerMoney: Record<string, number> = {};
			const playerLevel: Record<string, Level> = {};
			const playerBenches: Record<string, Record<number, Hero>> = {};
			const playerHealths: Record<string, number> = {};
			const playsig = uid();
			const pool = createPool(playsig);

			for (const player of players) {
				playerHeroes[player.publicKey] = [new HeroFactory().build()];
				playerShops[player.publicKey] = [
					getRandomAppellation(),
					getRandomAppellation(),
					getRandomAppellation(),
				];

				playerMoney[player.publicKey] = 5;
				playerLevel[player.publicKey] = 1;
				playerHealths[player.publicKey] = 20;
			}

			await createGameWithPoolAndDeleteQueuers(
				{
					playsig,
					publicKeys: players.map((player) => player.publicKey),
					nicknames,
					playerHeroes,
					playerShops,
					playerMoney,
					playerLevel,
					playerBenches,
					playerHealths,
					playerLostAt: {},
					phase: Phase.Planning,
					phaseStartAt: getDate(backContext).toISOString(),
				},
				pool,
				players.map((player) => player.publicKey),
			);
		}),
	);
}

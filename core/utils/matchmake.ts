import type { Subscription } from "rxjs";
import { debounceTime, debounce } from "rxjs/operators";
import { createPlaysig } from "./create-playsig";
import type { BackContext } from "../types/back-context";
import { merge, filter, timer, of } from "rxjs";
import type { Hero } from "../types/hero";
import { HeroFactory } from "./hero-factory";
import type { Appellation } from "../types/appellation";
import { Phase } from "../types/phase";
import { getRandomAppellation } from "./get-random-appellation";
import { createPool } from "./create-pool";
import type { Level } from "../types/level";

const MATCHMAKING_THROTTLE_TIME = 500;

export function matchmake({
	dataMapper: { observeQueuers, createGameWithPoolAndDeleteQueuers },
	lateMatchmakingTimer,
}: BackContext): Subscription {
	const startWhenEight$ = observeQueuers().pipe(
		debounceTime(MATCHMAKING_THROTTLE_TIME),
		filter((queuers) => queuers.length >= 8),
	);

	const startWhenLate$ = observeQueuers().pipe(
		lateMatchmakingTimer,
		filter((queuers) => queuers.length > 1),
	);

	const heroFactory = new HeroFactory();

	return merge(startWhenEight$, startWhenLate$).subscribe(async (queuers) => {
		const oldestFirst = [...queuers].sort((a, b) => a.createdAt - b.createdAt);
		const players = oldestFirst.slice(0, 8);

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
		const playsig = createPlaysig(players);
		const pool = createPool(playsig);

		for (const player of players) {
			playerHeroes[player.publicKey] = [heroFactory.build()];
			playerShops[player.publicKey] = [
				getRandomAppellation(),
				getRandomAppellation(),
				getRandomAppellation(),
			];

			playerMoney[player.publicKey] = 5;
			playerLevel[player.publicKey] = 1;
			playerHealths[player.publicKey] = 100;
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
				phase: Phase.Planning,
			},
			pool,
			players.map((player) => player.publicKey),
		);
	});
}

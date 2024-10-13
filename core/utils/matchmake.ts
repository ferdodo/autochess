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
import type { Pool } from "../types/pool";

const MATCHMAKING_THROTTLE_TIME = 500;
const MATCHMAKING_LATE = 3000;

export function matchmake({
	dataMapper: { observeQueuers, createGameWithPoolAndDeleteQueuers },
	config,
}: BackContext): Subscription {
	const startWhenEight$ = observeQueuers().pipe(
		debounceTime(MATCHMAKING_THROTTLE_TIME),
		filter((queuers) => queuers.length >= 8),
	);

	const startWhenLate$ = observeQueuers().pipe(
		debounce(() => {
			return config.skipMatchMakeDebounce
				? of(undefined)
				: timer(MATCHMAKING_LATE);
		}),
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
		const pool: Pool = createPool();

		for (const player of players) {
			playerHeroes[player.publicKey] = [heroFactory.build()];
			playerShops[player.publicKey] = [
				getRandomAppellation(),
				getRandomAppellation(),
				getRandomAppellation(),
			];

			playerMoney[player.publicKey] = 5;
		}

		await createGameWithPoolAndDeleteQueuers(
			{
				playsig: createPlaysig(players),
				publicKeys: players.map((player) => player.publicKey),
				nicknames,
				playerHeroes,
				playerShops,
				playerMoney,
				phase: Phase.Planning,
			},
			pool,
			players.map((player) => player.publicKey),
		);
	});
}

import type { Subscription } from "rxjs";
import { debounceTime, debounce } from "rxjs/operators";
import { createPlaysig } from "./create-playsig";
import type { BackContext } from "../types/back-context";
import { merge, filter, timer, of } from "rxjs";
import type { Hero } from "../types/hero";
import { HeroFactory } from "./hero-factory";
import { ProductFactory } from "./product-factory";
import type { Product } from "../types/product";

const MATCHMAKING_THROTTLE_TIME = 500;
const MATCHMAKING_LATE = 3000;

export function matchmake({
	queuerDataMapper,
	gameDataMapper,
	config,
}: BackContext): Subscription {
	const startWhenEight$ = queuerDataMapper.observe().pipe(
		debounceTime(MATCHMAKING_THROTTLE_TIME),
		filter((queuers) => queuers.length >= 8),
	);

	const startWhenLate$ = queuerDataMapper.observe().pipe(
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
		const playerShops: Record<string, Product[]> = {};
		const shopFactory = new ProductFactory();

		for (const player of players) {
			playerHeroes[player.publicKey] = [heroFactory.build()];
			playerShops[player.publicKey] = [
				shopFactory.build(),
				shopFactory.build(),
				shopFactory.build(),
			];
		}

		await gameDataMapper.createAndRemoveQueuers({
			playsig: createPlaysig(players),
			publicKeys: players.map((player) => player.publicKey),
			nicknames,
			playerHeroes,
			playerShops,
		});
	});
}

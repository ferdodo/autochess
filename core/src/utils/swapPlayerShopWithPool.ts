import type { Game } from "../types/Game.js";
import type { Pool } from "../types/Pool.js";
import type { PublicKey } from "../types/PublicKey.js";

export function swapPlayerShopWithPool(
	publicKey: PublicKey,
	game: Game,
	pool: Pool,
): [Game, Pool] {
	const newPool: Pool = {
		heroes: [...pool.heroes],
		playsig: pool.playsig,
	};

	const threeFirstHeroesOfPool = newPool.heroes.slice(0, 3);
	newPool.heroes = newPool.heroes.slice(3) as Pool["heroes"];

	for (const appellation of game.playerShops[publicKey]) {
		newPool.heroes.push(appellation);
	}

	const newGame: Game = {
		...game,
		playerShops: {
			...game.playerShops,
			[publicKey]: threeFirstHeroesOfPool,
		},
	};

	return [newGame, newPool];
}

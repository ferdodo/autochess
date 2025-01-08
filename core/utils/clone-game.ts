import type { Game } from "../types/game.js";
import type { Hero } from "../types/hero.js";

export function cloneGame(game: Game): Game {
	const _game = {
		playsig: game.playsig,
		publicKeys: [...game.publicKeys],
		nicknames: Object.assign({}, game.nicknames),
		playerHeroes: Object.fromEntries(
			Object.entries(game.playerHeroes)
				.filter(([_k, v]) => v)
				.map(([k, v]) => [k, v.map(cloneHero)]),
		),
		playerBenches: Object.fromEntries(
			Object.entries(game.playerBenches).map(([k, v]) => [
				k,
				Object.fromEntries(
					Object.entries(v)
						.filter(([_k, v]) => v)
						.map(([k, v]) => [k, cloneHero(v)]),
				),
			]),
		),
		playerShops: Object.fromEntries(
			Object.entries(game.playerShops).map(([k, v]) => [k, [...v]]),
		),
		playerMoney: Object.assign({}, game.playerMoney),
		playerLevel: Object.assign({}, game.playerLevel),
		playerHealths: Object.assign({}, game.playerHealths),
		playerLostAt: Object.assign({}, game.playerLostAt),
		combats: game.combats,
		phase: game.phase,
		phaseStartAt: game.phaseStartAt,
	};

	return _game;
}

export function cloneHero(hero: Hero): Hero {
	return {
		id: hero.id,
		appellation: hero.appellation,
		grade: hero.grade,
		position: Object.assign({}, hero.position),
		attributes: Object.assign({}, hero.attributes),
	};
}

import type { Appellation } from "./appellation.js";
import type { Playsig } from "./playsig.js";

type PoolHeroes = [
	Appellation,
	Appellation,
	Appellation,
	Appellation,
	Appellation,
	Appellation,
	Appellation,
	Appellation,
	Appellation,
	Appellation,
	Appellation,
	Appellation,
	Appellation,
	Appellation,
	Appellation,
	Appellation,
	Appellation,
	Appellation,
	Appellation,
	Appellation,
	Appellation,
	Appellation,
	Appellation,
	Appellation,
	Appellation,
	Appellation,
];

export interface Pool {
	heroes: PoolHeroes;
	playsig: Playsig;
}

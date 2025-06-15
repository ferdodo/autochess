import type { Appellation } from "./Appellation.js";
import type { Playsig } from "./Playsig.js";

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

import type { Appellation } from "./appellation";
import type { Playsig } from "./playsig";

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

import type { Hero } from "./hero";
import type { Playsig } from "./playsig";

export interface Confrontation {
	playerAPublicKey: Playsig;
	playerBPublicKey: Playsig;
	playerAHeroes: Hero[];
	playerBHeroes: Hero[];
}

import type { Action } from "./Action.js";
import type { Hero } from "./Hero.js";
import type { PublicKey } from "./PublicKey.js";

export interface Combat {
	playerAPublicKey: PublicKey;
	playerBPublicKey: PublicKey;
	playerAHeroes: Hero[];
	playerBHeroes: Hero[];
	actions: Action[];
}

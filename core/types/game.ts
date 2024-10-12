import type { PublicKey } from "./public-key";
import type { Hero } from "./hero";
import type { Appellation } from "./appellation";
import type { Playsig } from "./playsig";
import type { Phase } from "./phase";

export interface Game {
	playsig: Playsig;
	publicKeys: PublicKey[];
	nicknames: Record<PublicKey, string>;
	playerHeroes: Record<PublicKey, Hero[]>;
	playerShops: Record<PublicKey, Appellation[]>;
	playerMoney: Record<PublicKey, number>;
	phase: Phase;
}

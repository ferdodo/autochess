import type { PublicKey } from "./public-key";
import type { Hero } from "./hero";
import type { Product } from "./product";
import type { Playsig } from "./playsig";
import type { Phase } from "./phase";

export interface Game {
	playsig: Playsig;
	publicKeys: PublicKey[];
	nicknames: Record<PublicKey, string>;
	playerHeroes: Record<PublicKey, Hero[]>;
	playerShops: Record<PublicKey, Product[]>;
	playerMoney: Record<PublicKey, number>;
	phase: Phase;
}

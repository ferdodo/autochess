import type { PublicKey } from "./public-key";
import type { Hero } from "./hero";
import type { Product } from "./product";
import type { Playsig } from "./playsig";

export interface Game {
	playsig: Playsig;
	publicKeys: PublicKey[];
	nicknames: Record<PublicKey, string>;
	playerPieces: Record<PublicKey, Hero[]>;
	shop: Product[];
}

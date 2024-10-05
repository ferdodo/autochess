import type { PublicKey } from "./public-key";
import type { Hero } from "./hero";
import type { Product } from "./product";

export interface Game {
	id: string;
	publicKeys: PublicKey[];
	nicknames: Record<string, string>;
	playerPieces: Record<PublicKey, Hero[]>;
	shop: Product[];
}

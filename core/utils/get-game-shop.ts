import type { Game } from "../types/game.js";
import type { Appellation } from "../types/appellation.js";
import type { PublicKey } from "../types/public-key.js";

export function getGameShop(game: Game, publicKey: PublicKey): Appellation[] {
	const shop = game.playerShops[publicKey];

	if (!shop) {
		throw new Error("Shop not found !");
	}

	return shop;
}

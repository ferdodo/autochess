import type { Game } from "../types/Game.js";
import type { Appellation } from "../types/Appellation.js";
import type { PublicKey } from "../types/PublicKey.js";

export function getGameShop(game: Game, publicKey: PublicKey): Appellation[] {
	const shop = game.playerShops[publicKey];

	if (!shop) {
		throw new Error("Shop not found !");
	}

	return shop;
}

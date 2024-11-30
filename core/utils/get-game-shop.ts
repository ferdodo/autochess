import type { Game } from "../types/game";
import type { Appellation } from "../types/appellation";
import type { PublicKey } from "../types/public-key";

export function getGameShop(game: Game, publicKey: PublicKey): Appellation[] {
	const shop = game.playerShops[publicKey];

	if (!shop) {
		throw new Error("Shop not found !");
	}

	return shop;
}

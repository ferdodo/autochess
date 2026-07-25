import type { Game } from "../types/Game.js";
import type { PublicKey } from "../types/PublicKey.js";
import { getHeroCost } from "./getHeroCost.js";

export function canBotShopBuy(game: Game, publicKey: PublicKey): boolean {
	const money = game.playerMoney[publicKey];
	const shop = game.playerShops[publicKey] || [];
	const bench = game.playerBenches[publicKey] || {};
	const benchSize = Object.values(bench).filter(Boolean).length;
	const benchHasFreeSlots = benchSize < 6;

	if (!benchHasFreeSlots) {
		return false;
	}

	// Collect all hero types the bot currently has
	const board = game.playerHeroes[publicKey] || [];
	const allHeroes = [...Object.values(bench).filter(Boolean), ...board];
	const heroTypes = new Set(allHeroes.map((h) => h.appellation));
	const level = game.playerLevel[publicKey] || 1;

	// Check if there's an interesting item to buy
	for (const product of shop) {
		if (product === null) {
			continue;
		}
		const cost = getHeroCost(product);
		if (money >= cost) {
			// Buy if there's room for a new type, or if it's a type already owned
			if (heroTypes.size < level || heroTypes.has(product)) {
				return true;
			}
		}
	}

	return false;
}

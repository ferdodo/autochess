import type { Game } from "../types/game.js";
import type { PublicKey } from "../types/public-key.js";
import { getHeroCost } from "./get-hero-cost.js";
import { getLevelUpCost } from "./get-level-up-cost.js";

export function isBotOutOfMoves(game: Game, publicKey: PublicKey): boolean {
	const money = game.playerMoney[publicKey];
	const levelUpCost = getLevelUpCost(game, publicKey);
	const cantLevelUp = money < levelUpCost;
	const shop = game.playerShops[publicKey] || [];
	const minShopEntryPrice = Math.min(...shop.map(getHeroCost));
	const bench = game.playerBenches[publicKey] || {};
	const benchSize = Object.values(bench).filter(Boolean).length;
	const benchHasFreeSlots = benchSize < 6;
	const cantShopBuy = money < minShopEntryPrice || !benchHasFreeSlots;
	const board = game.playerHeroes[publicKey] || [];
	const level = game.playerLevel[publicKey] || 1;
	const boardHasFreeSlots = board.length < level;
	const cantTransposeToBoard = !benchSize || !boardHasFreeSlots;
	return cantLevelUp && cantShopBuy && cantTransposeToBoard;
}

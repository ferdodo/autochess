import type { Game } from "../types/Game.js";
import type { PublicKey } from "../types/PublicKey.js";
import { getHeroCost } from "./getHeroCost.js";
import { getLevelUpCost } from "./getLevelUpCost.js";

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

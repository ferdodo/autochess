import type { Game } from "../types/Game.js";
import type { PublicKey } from "../types/PublicKey.js";
import { getLevelUpCost } from "./getLevelUpCost.js";

export function canBotLevelUp(game: Game, publicKey: PublicKey): boolean {
	const money = game.playerMoney[publicKey];
	const level = game.playerLevel[publicKey] || 1;
	const levelUpCost = getLevelUpCost(game, publicKey);
	return money >= levelUpCost && level < 6;
}

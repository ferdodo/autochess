import type { Game } from "../types/Game.js";
import type { PublicKey } from "../types/PublicKey.js";
import { getRerollCost } from "./getRerollCost.js";

export function canBotReroll(game: Game, publicKey: PublicKey): boolean {
	const money = game.playerMoney[publicKey];
	const rerollCost = getRerollCost();
	return money >= rerollCost && money >= 6;
}

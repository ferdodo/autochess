import type { Game } from "../types/Game.js";
import type { PublicKey } from "../types/PublicKey.js";
import { canBotReroll } from "./canBotReroll.js";
import { canBotLevelUp } from "./canBotLevelUp.js";
import { canBotTransposeToBoard } from "./canBotTransposeToBoard.js";
import { canBotShopBuy } from "./canBotShopBuy.js";
import { Phase } from "../types/Phase.js";

export function isBotOutOfMoves(game: Game, publicKey: PublicKey): boolean {
	if (game.phase === Phase.Combat) {
		return true;
	}

	const cantLevelUp = !canBotLevelUp(game, publicKey);
	const cantShopBuy = !canBotShopBuy(game, publicKey);
	const cantTransposeToBoard = !canBotTransposeToBoard(game, publicKey);
	const cantReroll = !canBotReroll(game, publicKey);
	return cantLevelUp && cantShopBuy && cantTransposeToBoard && cantReroll;
}

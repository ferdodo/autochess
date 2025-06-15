import { transpose } from "../api/transpose.js";
import { debounceTime } from "rxjs/operators";
import type { FrontContext } from "../types/FrontContext.js";
import { initiateGame } from "../api/initiateGame.js";
import { observeGame } from "../api/observeGame.js";
import { getLevelUpCost } from "./getLevelUpCost.js";
import { levelUp } from "../api/levelUp.js";
import { Phase } from "../types/Phase.js";
import { getHeroCost } from "./getHeroCost.js";
import { shopBuy } from "../api/shopBuy.js";

export async function connectBot(frontContext: FrontContext, debounce = 0) {
	const initiateGameResponse = await initiateGame(frontContext);
	frontContext.playsig = initiateGameResponse.playsig;
	frontContext.stamp = initiateGameResponse.stamp;

	observeGame(frontContext)
		.pipe(debounceTime(debounce))
		.subscribe(async (game) => {
			if (game.phase === Phase.Planning) {
				const bench = game.playerBenches[frontContext.publicKey] || {};
				const benchEntries = Object.entries(bench);
				const levelUpCost = getLevelUpCost(game, frontContext.publicKey);

				if (game.playerMoney[frontContext.publicKey] >= levelUpCost) {
					await levelUp(frontContext);
					return;
				}

				const board = game.playerHeroes[frontContext.publicKey];
				const boardSize = board.filter(Boolean).length;

				const availableBoardSlot =
					boardSize < game.playerLevel[frontContext.publicKey];

				for (const [_benchPosition, hero] of benchEntries) {
					const benchPosition = Number.parseInt(_benchPosition);

					if (hero && availableBoardSlot) {
						const grab = { benchPosition };
						const positionX = Math.floor(Math.random() * 5);
						const positionY = Math.floor(Math.random() * 10);
						const ungrab = { positionX, positionY };
						await transpose(frontContext, grab, ungrab);
						return;
					}
				}

				const shop = game.playerShops[frontContext.publicKey] || {};
				const shopEntries = Object.entries(shop);
				const botMoney = game.playerMoney[frontContext.publicKey] || 0;

				for (const [_item, product] of shopEntries) {
					const item = Number.parseInt(_item);
					const cost = getHeroCost(product);

					if (botMoney >= cost) {
						await shopBuy(frontContext, item);
						return;
					}
				}
			}
		});

	return frontContext;
}

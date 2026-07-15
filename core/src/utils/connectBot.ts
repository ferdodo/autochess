import { transpose } from "../api/transpose.js";
import { debounceTime } from "rxjs/operators";
import type { FrontContext } from "../types/FrontContext.js";
import { initiateGame } from "../api/initiateGame.js";
import { observeGame } from "../api/observeGame.js";
import { levelUp } from "../api/levelUp.js";
import { Phase } from "../types/Phase.js";
import { shopBuy } from "../api/shopBuy.js";
import { reroll } from "../api/reroll.js";
import { canBotLevelUp } from "./canBotLevelUp.js";
import { canBotTransposeToBoard } from "./canBotTransposeToBoard.js";
import { canBotShopBuy } from "./canBotShopBuy.js";
import { canBotReroll } from "./canBotReroll.js";
import { getHeroCost } from "./getHeroCost.js";

export async function connectBot(frontContext: FrontContext, debounce = 0) {
	const initiateGameResponse = await initiateGame(frontContext);
	frontContext.playsig = initiateGameResponse.playsig;
	frontContext.stamp = initiateGameResponse.stamp;
	observeGame(frontContext)
		.pipe(debounceTime(debounce))
		.subscribe(async (game) => {
			if (game.phase === Phase.Planning) {
				if (canBotLevelUp(game, frontContext.publicKey)) {
					await levelUp(frontContext);
					return;
				}

				if (canBotTransposeToBoard(game, frontContext.publicKey)) {
					const bench = game.playerBenches[frontContext.publicKey] || {};
					const benchEntries = Object.entries(bench);

					for (const [_benchPosition, hero] of benchEntries) {
						const benchPosition = Number.parseInt(_benchPosition);

						if (hero) {
							const grab = { benchPosition };
							const positionX = Math.floor(Math.random() * 5);
							const positionY = Math.floor(Math.random() * 10);
							const ungrab = { positionX, positionY };
							await transpose(frontContext, grab, ungrab);
							return;
						}
					}
				}

				const botMoney = game.playerMoney[frontContext.publicKey] || 0;
				const shop = game.playerShops[frontContext.publicKey] || {};
				const shopEntries = Object.entries(shop);

				if (canBotShopBuy(game, frontContext.publicKey)) {
					const bench = game.playerBenches[frontContext.publicKey] || {};
					const board = game.playerHeroes[frontContext.publicKey] || [];
					const allHeroes = [...Object.values(bench).filter(Boolean), ...board];
					const level = game.playerLevel[frontContext.publicKey] || 1;
					const heroTypes = new Set(allHeroes.map((h) => h.appellation));

					for (const [_item, product] of shopEntries) {
						const item = Number.parseInt(_item);
						const cost = getHeroCost(product);
						if (botMoney >= cost) {
							if (heroTypes.size < level || heroTypes.has(product)) {
								await shopBuy(frontContext, item);
								return;
							}
						}
					}
				}

				if (canBotReroll(game, frontContext.publicKey)) {
					await reroll(frontContext);
					return;
				}
			}
		});

	return frontContext;
}

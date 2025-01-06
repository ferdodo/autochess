import type { Connection } from "../types/connection.js";
import type { ClientMessage } from "../types/client-message.js";
import type { ServerMessage } from "../types/server-message.js";
import type { FrontContext } from "../types/front-context.js";
import type { PublicKey } from "../types/public-key.js";
import type { SignedMessage } from "../types/signed-message.js";
import { initiateGame } from "../api/initiate-game.js";
import { observeGame } from "../api/observe-game.js";
import { Phase } from "../types/phase.js";
import { getHeroCost } from "./get-hero-cost.js";
import { shopBuy } from "../api/shop-buy.js";
import { transpose } from "../api/transpose.js";

export async function connectBot(frontContext: FrontContext) {
	const initiateGameResponse = await initiateGame(frontContext);
	frontContext.playsig = initiateGameResponse.playsig;
	frontContext.stamp = initiateGameResponse.stamp;

	observeGame(frontContext).subscribe(async (game) => {
		if (game.phase === Phase.Planning) {
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

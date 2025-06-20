import type { TestContext } from "../types/TestContext.js";
import { firstValueFrom, map, filter } from "rxjs";
import { observeGame } from "../api/observeGame.js";
import { getGame } from "../utils/getGame.js";
import { shopBuy } from "../api/shopBuy.js";
import { observeServerNotifications } from "../utils/observeServerNotifications.js";
import { ServerNotification } from "../types/ServerNotification.js";

export async function asPlayerShopBuy(
	testContext: TestContext,
	playerNumber = 0,
) {
	const frontContext = testContext.frontContexts[playerNumber];

	if (!frontContext) {
		throw new Error(`Player ${playerNumber} not found !`);
	}

	const gameBefore = await getGame(testContext, playerNumber);

	const benchSizeBefore = Object.values(
		gameBefore.playerBenches[frontContext.publicKey] || {},
	).filter(Boolean).length;

	const invalidShopBuy = firstValueFrom(
		observeServerNotifications(frontContext).pipe(
			map((notification) => {
				return notification === ServerNotification.FullBench;
			}),
			filter(Boolean),
		),
	);

	const waitBought = firstValueFrom(
		observeGame(frontContext).pipe(
			map((game) => {
				return Object.values(
					game.playerBenches[frontContext.publicKey] || {},
				).filter(Boolean).length;
			}),
			filter((benchSize) => benchSize !== benchSizeBefore),
		),
	);

	await shopBuy(frontContext, 0);

	await Promise.race([invalidShopBuy, waitBought]);
}

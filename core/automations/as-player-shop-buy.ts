import type { TestContext } from "../types/test-context";
import { firstValueFrom, map, filter } from "rxjs";
import { observeGame } from "../api/observe-game";
import { getGame } from "../utils/get-game";
import { shopBuy } from "../api/shop-buy";

export async function asPlayerShopBuy(
	testContext: TestContext,
	playerNumber = 0,
) {
	const frontContext = testContext.frontContexts[playerNumber];

	if (!frontContext) {
		throw new Error(`Player ${playerNumber} not found !`);
	}

	const gameBefore = await getGame(testContext, playerNumber);

	const benchSizeBefore = Object.keys(
		gameBefore.playerBenches[frontContext.publicKey] || {},
	).length;

	await shopBuy(frontContext, 0);

	await firstValueFrom(
		observeGame(frontContext).pipe(
			map(
				(game) =>
					Object.keys(game.playerBenches[frontContext.publicKey] || {}).length,
			),
			filter((benchSize) => benchSize !== benchSizeBefore),
		),
	);
}

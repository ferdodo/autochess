import type { TestContext } from "../types/TestContext.js";
import { firstValueFrom, map, filter } from "rxjs";
import { observeGame } from "../api/observeGame.js";
import { getGame } from "../utils/getGame.js";
import { levelUp } from "../api/levelUp.js";
import { observeServerNotifications } from "../utils/observeServerNotifications.js";
import { ServerNotification } from "../types/ServerNotification.js";

export async function asPlayerLevelUp(
	testContext: TestContext,
	playerNumber = 0,
) {
	const frontContext = testContext.frontContexts[playerNumber];

	if (!frontContext) {
		throw new Error(`Player ${playerNumber} not found !`);
	}

	const gameBefore = await getGame(testContext, playerNumber);
	const levelBefore = gameBefore.playerLevel[frontContext.publicKey];

	const waitInvalidLevelUp = firstValueFrom(
		observeServerNotifications(frontContext).pipe(
			map((notification) => {
				return notification === ServerNotification.InvalidLevelUp;
			}),
			filter(Boolean),
		),
	);

	const waitLeveledUp = firstValueFrom(
		observeGame(frontContext).pipe(
			map((game) => {
				return game.playerLevel[frontContext.publicKey];
			}),
			filter((level) => level === levelBefore + 1),
		),
	);

	await levelUp(frontContext);
	await Promise.race([waitInvalidLevelUp, waitLeveledUp]);
}

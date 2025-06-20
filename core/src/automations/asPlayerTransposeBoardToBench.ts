import type { TestContext } from "../types/TestContext.js";
import { firstValueFrom, map, filter } from "rxjs";
import { observeGame } from "../api/observeGame.js";
import { getGame } from "../utils/getGame.js";
import { transpose } from "../api/transpose.js";
import type { PieceSlot } from "../types/PieceSlot.js";
import { observeServerNotifications } from "../utils/observeServerNotifications.js";
import { ServerNotification } from "../types/ServerNotification.js";
import { timeout } from "rxjs";

export async function asPlayerTransposeBoardToBench(
	testContext: TestContext,
	playerNumber = 0,
	benchPosition = 0,
) {
	const frontContext = testContext.frontContexts[playerNumber];

	if (!frontContext) {
		throw new Error(`Player ${playerNumber} not found !`);
	}

	const gameBefore = await getGame(testContext, playerNumber);

	const playerPositionBefore = Object.values(
		gameBefore.playerBenches[frontContext.publicKey] || {},
	)
		.map((hero) => `${hero.position.x}${hero.position.y}`)
		.join("");

	const grab: PieceSlot = {
		positionX: 0,
		positionY: 0,
	};

	const ungrab: PieceSlot = {
		benchPosition,
	};

	const waitTranspositionNotAllowedInCombat = firstValueFrom(
		observeServerNotifications(frontContext).pipe(
			filter(
				(notification) =>
					notification === ServerNotification.TranspositionNotAllowedInCombat,
			),
			timeout(1000),
		),
	);

	const waitTranspose = firstValueFrom(
		observeGame(frontContext).pipe(
			map((game) =>
				Object.values(game.playerBenches[frontContext.publicKey] || {})
					.map((hero) => `${hero.position.x}${hero.position.y}`)
					.join(""),
			),
			filter((positions) => positions !== playerPositionBefore),
		),
	);

	await transpose(frontContext, grab, ungrab);

	await Promise.race([waitTranspose, waitTranspositionNotAllowedInCombat]);
}

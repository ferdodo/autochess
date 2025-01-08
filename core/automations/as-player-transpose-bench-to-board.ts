import type { TestContext } from "../types/test-context.js";
import { firstValueFrom, map, filter } from "rxjs";
import { timeout } from "rxjs/operators";
import { observeGame } from "../api/observe-game.js";
import { getGame } from "../utils/get-game.js";
import { transpose } from "../api/transpose.js";
import type { PieceSlot } from "../types/piece-slot.js";
import { observeServerNotifications } from "../utils/observe-server-notifications.js";

export async function asPlayerTransposeBenchToBoard(
	testContext: TestContext,
	playerNumber = 0,
	ungrab: PieceSlot = {
		positionX: 1,
		positionY: 0,
	},
) {
	const frontContext = testContext.frontContexts[playerNumber];

	if (!frontContext) {
		throw new Error(`Player ${playerNumber} not found !`);
	}

	const gameBefore = await getGame(testContext, playerNumber);

	const playerPositionBefore = gameBefore.playerHeroes[frontContext.publicKey]
		.map((hero) => `${hero.position.x}${hero.position.y}`)
		.join("");

	const grab: PieceSlot = {
		benchPosition: 0,
	};

	await transpose(frontContext, grab, ungrab);

	const waitTranspositionInvalid = firstValueFrom(
		observeServerNotifications(frontContext).pipe(
			filter(
				(notification) => notification === "Invalid transposition position !",
			),
			timeout(1000),
		),
	);

	const waitTransposition = firstValueFrom(
		observeGame(frontContext).pipe(
			map((game) =>
				game.playerHeroes[frontContext.publicKey]
					.map((hero) => `${hero.position.x}${hero.position.y}`)
					.join(""),
			),
			filter((positions) => {
				return positions !== playerPositionBefore;
			}),
			timeout(1000),
		),
	);

	await Promise.race([waitTransposition, waitTranspositionInvalid]);
}

import type { TestContext } from "../types/TestContext.js";
import { firstValueFrom, map, filter } from "rxjs";
import { observeGame } from "../api/observeGame.js";
import { getGame } from "../utils/getGame.js";
import { transpose } from "../api/transpose.js";
import type { PieceSlot } from "../types/PieceSlot.js";

export async function asPlayerTransposeBenchToBench(
	testContext: TestContext,
	playerNumber = 0,
) {
	const frontContext = testContext.frontContexts[playerNumber];

	if (!frontContext) {
		throw new Error(`Player ${playerNumber} not found !`);
	}

	const gameBefore = await getGame(testContext, playerNumber);

	const playerPositionBefore = Object.entries(
		gameBefore.playerBenches[frontContext.publicKey] || {},
	)
		.map(([position, hero]) => `${position}-${hero.id}`)
		.join("");

	const grab: PieceSlot = {
		benchPosition: 0,
	};

	const ungrab: PieceSlot = {
		benchPosition: 1,
	};

	const waitTranspose = firstValueFrom(
		observeGame(frontContext).pipe(
			map((game) =>
				Object.entries(game.playerBenches[frontContext.publicKey] || {})
					.map(([position, hero]) => `${position}-${hero.id}`)
					.join(""),
			),
			filter((positions) => positions !== playerPositionBefore),
		),
	);

	await transpose(frontContext, grab, ungrab);

	await waitTranspose;
}

import type { TestContext } from "../types/test-context";
import { firstValueFrom, map, filter } from "rxjs";
import { observeGame } from "../api/observe-game";
import { getGame } from "../utils/get-game";
import { transpose } from "../api/transpose";
import type { PieceSlot } from "../types/piece-slot";

export async function asPlayerTransposeBoardToBench(
	testContext: TestContext,
	playerNumber = 0,
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
		benchPosition: 0,
	};

	await transpose(frontContext, grab, ungrab);

	await firstValueFrom(
		observeGame(frontContext).pipe(
			map((game) =>
				Object.values(game.playerBenches[frontContext.publicKey] || {})
					.map((hero) => `${hero.position.x}${hero.position.y}`)
					.join(""),
			),
			filter((positions) => positions !== playerPositionBefore),
		),
	);
}
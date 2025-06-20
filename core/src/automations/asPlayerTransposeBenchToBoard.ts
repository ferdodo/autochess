import type { TestContext } from "../types/TestContext.js";
import { firstValueFrom, map, filter } from "rxjs";
import { timeout } from "rxjs/operators";
import { observeGame } from "../api/observeGame.js";
import { getGame } from "../utils/getGame.js";
import { transpose } from "../api/transpose.js";
import type { PieceSlot } from "../types/PieceSlot.js";
import { observeServerNotifications } from "../utils/observeServerNotifications.js";
import { ServerNotification } from "../types/ServerNotification.js";

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
		.map((hero) => `${hero.id}${hero.position.x}${hero.position.y}`)
		.join("");

	const grab: PieceSlot = {
		benchPosition: 0,
	};

	const waitTranspositionInvalid = firstValueFrom(
		observeServerNotifications(frontContext).pipe(
			filter(
				(notification) =>
					notification === ServerNotification.InvalidTranspositionPosition,
			),
			timeout(1000),
		),
	);

	const waitNotAllowedInCombaPhase = firstValueFrom(
		observeServerNotifications(frontContext).pipe(
			filter(
				(notification) =>
					notification === ServerNotification.TranspositionNotAllowedInCombat,
			),
			timeout(1000),
		),
	);

	const waitTransposition = firstValueFrom(
		observeGame(frontContext).pipe(
			map((game) =>
				game.playerHeroes[frontContext.publicKey]
					.map((hero) => `${hero.id}${hero.position.x}${hero.position.y}`)
					.join(""),
			),
			filter((positions) => {
				return positions !== playerPositionBefore;
			}),
			timeout(1000),
		),
	);

	await transpose(frontContext, grab, ungrab);

	await Promise.race([
		waitTransposition,
		waitTranspositionInvalid,
		waitNotAllowedInCombaPhase,
	]);
}

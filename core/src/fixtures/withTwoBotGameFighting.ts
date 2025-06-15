import type { TestContext } from "../types/TestContext.js";
import { goToNextPhase } from "../automations/goToNextPhase.js";
import { getGame } from "../utils/getGame.js";
import { withTwoBotGameStarted } from "./withTwoBotGameStarted.js";
import { observeGame } from "../api/observeGame.js";
import { firstValueFrom, filter, timeout } from "rxjs";
import { Phase } from "../types/Phase.js";
import { isBotOutOfMoves } from "../utils/isBotOutOfMoves.js";

export async function withTwoBotGameFighting(): Promise<TestContext> {
	const testContext = await withTwoBotGameStarted();
	let game = await getGame(testContext);
	const publicKeyA = testContext.frontContexts[0].publicKey || "Error";
	const publicKeyB = testContext.frontContexts[1].publicKey || "Error";
	const frontContextA = testContext.frontContexts[0];
	const frontContextB = testContext.frontContexts[1];
	const getHeroCountA = () => game.playerHeroes[publicKeyA]?.length || 0;
	const getHeroCountB = () => game.playerHeroes[publicKeyB]?.length || 0;

	while (getHeroCountA() < 5 || getHeroCountB() < 5) {
		await firstValueFrom(
			observeGame(frontContextA).pipe(
				filter((game) => isBotOutOfMoves(game, frontContextA.publicKey)),
				timeout(1000),
			),
		);

		await firstValueFrom(
			observeGame(frontContextB).pipe(
				filter((game) => isBotOutOfMoves(game, frontContextB.publicKey)),
				timeout(1000),
			),
		);

		await goToNextPhase(testContext);
		await goToNextPhase(testContext);
		game = await getGame(testContext);
	}

	if (game.phase === Phase.Planning) {
		await goToNextPhase(testContext);
	}

	return testContext;
}

import type { TestContext } from "../types/test-context.js";
import { goToNextPhase } from "../automations/go-to-next-phase.js";
import { getGame } from "../utils/get-game.js";
import { withTwoBotGameStarted } from "./with-two-bot-game-started.js";
import { observeGame } from "../api/observe-game.js";
import { firstValueFrom, filter, timeout } from "rxjs";
import { Phase } from "../types/phase.js";

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
				filter((game) => {
					return (
						game.playerMoney[frontContextA.publicKey] < 3 &&
						Object.values(game.playerBenches[frontContextA.publicKey]).filter(
							Boolean,
						).length === 0
					);
				}),
				timeout(1000),
			),
		);

		await firstValueFrom(
			observeGame(frontContextB).pipe(
				filter((game) => {
					return (
						game.playerMoney[frontContextB.publicKey] < 3 &&
						Object.values(game.playerBenches[frontContextB.publicKey]).filter(
							Boolean,
						).length === 0
					);
				}),
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
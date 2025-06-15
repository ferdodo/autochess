import { expect, test } from "vitest";
import { withOneBoughtHero } from "../fixtures/withOneBoughtHero.js";
import { getGame } from "./getGame.js";
import { portrayBench } from "./portrayBench.js";

test("portray-bench", async () => {
	const testContext = await withOneBoughtHero();
	const game = await getGame(testContext);
	const publicKey = testContext.frontContexts[0].publicKey || "Error";
	const bench = game.playerBenches[publicKey] || {};
	const portrayed = portrayBench(bench, undefined);
	expect(portrayed).toBeDefined();
	await new Promise((resolve) => setTimeout(resolve, 1));
});

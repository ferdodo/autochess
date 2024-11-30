import { expect, test } from "vitest";
import { withOneBoughtHero } from "../fixtures/with-one-bought-hero";
import { portrayBench } from "./portray-bench";
import { getGame } from "../utils/get-game";

test("portray-bench", async () => {
	const testContext = await withOneBoughtHero();
	const game = await getGame(testContext);
	const publicKey = testContext.frontContexts[0].publicKey || "Error";
	const bench = game.playerBenches[publicKey] || {};
	const portrayed = portrayBench(bench, undefined);
	expect(portrayed).toBeDefined();
});

import { writeFileSync } from "node:fs";
import { goToNextPhase } from "../../core/src/automations/goToNextPhase.js";
import { withTwoBotGameStarted } from "../../core/src/fixtures/withTwoBotGameStarted.js";
import { getGame } from "../../core/src/utils/getGame.js";
import { isGameInProgress } from "../../core/src/utils/isGameInProgress.js";
import type { MemoryBenchmarkResult } from "../src/MemoryBenchmarkResult.js";

const GAMES = 10;

async function main(): Promise<void> {
	const samples: MemoryBenchmarkResult["samples"] = [];
	let iteration = 0;

	for (let game = 0; game < GAMES; game++) {
		const testContext = await withTwoBotGameStarted();

		while (isGameInProgress(await getGame(testContext))) {
			await goToNextPhase(testContext);
			samples.push({ iteration: iteration++, memory: process.memoryUsage().heapUsed });
		}
	}

	const result: MemoryBenchmarkResult = {
		name: "Two bots game played until game over",
		samples,
	};

	writeFileSync("perf/twoBotsGameOver.result.json", JSON.stringify([result], null, 2));
	console.log(
		`Two bots game over memory benchmark: ${samples.length} samples saved to perf/twoBotsGameOver.result.json`,
	);
}

main();

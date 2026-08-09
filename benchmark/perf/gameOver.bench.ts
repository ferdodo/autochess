import { writeFileSync } from "node:fs";
import { goToNextPhase } from "../../core/src/automations/goToNextPhase.js";
import { withTwoPlayerGameStarted } from "../../core/src/fixtures/withTwoPlayerGameStarted.js";
import { getGame } from "../../core/src/utils/getGame.js";
import { isGameInProgress } from "../../core/src/utils/isGameInProgress.js";
import type { MemoryBenchmarkResult } from "../src/MemoryBenchmarkResult.js";

const GAMES = 10;

async function main(): Promise<void> {
	const samples: MemoryBenchmarkResult["samples"] = [];
	let iteration = 0;

	for (let game = 0; game < GAMES; game++) {
		const testContext = await withTwoPlayerGameStarted();

		while (isGameInProgress(await getGame(testContext))) {
			await goToNextPhase(testContext);
			samples.push({ iteration: iteration++, memory: process.memoryUsage().heapUsed });
		}
	}

	const result: MemoryBenchmarkResult = {
		name: "Game played until game over",
		samples,
	};

	writeFileSync("perf/gameOver.result.json", JSON.stringify([result], null, 2));
	console.log(`Game over memory benchmark: ${samples.length} samples saved to perf/gameOver.result.json`);
}

main();

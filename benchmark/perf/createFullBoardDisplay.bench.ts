import { writeFileSync } from "node:fs";
import type { MemoryBenchmarkResult } from "../src/MemoryBenchmarkResult.js";
import { createFullBoardDisplay } from "./fixtures/createFullBoardDisplay.js";

const ITERATIONS = 100;

function measureMemory(): number {
	if (global.gc) {
		global.gc();
	}
	return process.memoryUsage().heapUsed;
}

async function runMemoryBenchmark(
	name: string,
	fn: () => void,
): Promise<MemoryBenchmarkResult> {
	const samples = [];

	for (let iteration = 0; iteration < ITERATIONS; iteration++) {
		fn();
		const memory = measureMemory();

		samples.push({
			iteration: iteration + 1,
			memory,
		});
	}

	return {
		name,
		samples,
	};
}

async function main(): Promise<void> {
	const result = await runMemoryBenchmark("Create full board display (memory leak test)", () => {
		createFullBoardDisplay();
	});

	writeFileSync("perf/createFullBoardDisplay.result.json", JSON.stringify(result, null, 2));
	console.log("Benchmark createFullBoardDisplay saved");
}

main();

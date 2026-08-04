import { writeFileSync } from "node:fs";
import type { MemoryBenchmarkResult } from "../src/MemoryBenchmarkResult.js";
import { createBenchDisplay } from "./fixtures/createBenchDisplay.js";

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
	const result = await runMemoryBenchmark("Create bench display (memory leak test)", () => {
		createBenchDisplay();
	});

	writeFileSync("perf/createBenchDisplay.result.json", JSON.stringify(result, null, 2));
	console.log("Benchmark createBenchDisplay saved");
}

main();

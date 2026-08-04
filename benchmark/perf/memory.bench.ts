import { writeFileSync } from "node:fs";
import type { MemoryBenchmarkResult } from "../src/MemoryBenchmarkResult.js";
//
const ITERATIONS = 100;

function measureMemory(): number {
	if (global.gc) {
		global.gc();
	}
	return process.memoryUsage().heapUsed;
}

async function runMemoryBenchmark(name: string, fn: () => void | Promise<void>): Promise<MemoryBenchmarkResult> {
	const samples = [];

	for (let iteration = 0; iteration < ITERATIONS; iteration++) {
		await fn();
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
	const results: MemoryBenchmarkResult[] = [];

	results.push(
		await runMemoryBenchmark("Array allocation (leak)", () => {
			const arr = new Array(100);
			for (let i = 0; i < 100; i++) {
				arr[i] = Math.random();
			}
		}),
	);

	results.push(
		await runMemoryBenchmark("Object allocation (leak)", () => {
			const obj: Record<string, number> = {};
			for (let i = 0; i < 100; i++) {
				obj[`key_${i}`] = Math.random();
			}
		}),
	);

	results.push(
		await runMemoryBenchmark("Computation (no leak)", () => {
			let sum = 0;
			for (let i = 0; i < 100; i++) {
				sum += Math.random();
			}
			// Prevent optimization
			if (sum < 0) console.log(sum);
		}),
	);

	writeFileSync("perf/memory.result.json", JSON.stringify(results, null, 2));
	console.log("Memory benchmark results saved to perf/memory.result.json");
}

main();

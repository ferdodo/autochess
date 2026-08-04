import { writeFileSync } from "node:fs";
import type { MemoryBenchmarkResult } from "../src/MemoryBenchmarkResult.js";
import { createDisplayWithShopFixture } from "./fixtures/createDisplayWithShopFixture.js";

const ITERATIONS = 1000;

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
	const result = await runMemoryBenchmark("renderShopProducts", () => {
		const [threeContext, display] = createDisplayWithShopFixture();
		threeContext.shopProductBackgroundMeshes = display.shop;
	});

	writeFileSync("perf/renderShopProducts.result.json", JSON.stringify(result, null, 2));
	console.log("Benchmark renderShopProducts saved");
}

main();

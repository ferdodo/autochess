import { SimpleBench } from "../src/SimpleBench.js";
import { writeFileSync } from "node:fs";
import type { ExecutionStatisticsResult } from "../src/ExecutionStatisticsResult.js";
import { createBoardWithPiecesDisplay } from "./fixtures/createBoardWithPiecesDisplay.js";

async function main() {
	const bench = new SimpleBench(100);

	bench.add("Create board with pieces display", () => {
		createBoardWithPiecesDisplay();
	});

	const results = await bench.run();

	const benchResult: ExecutionStatisticsResult = {
		name: results[0].name,
		latency: results[0].latency,
		throughput: results[0].throughput,
		totalTime: results[0].totalTime,
		period: results[0].period,
	};

	writeFileSync("perf/renderBoardWithPiecesDisplay.result.json", JSON.stringify(benchResult, null, 2));
	console.log("Benchmark renderBoardWithPiecesDisplay saved");
}

main();

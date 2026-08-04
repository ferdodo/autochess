import { writeFileSync } from "node:fs";
import { SimpleBench } from "../src/SimpleBench.js";
import type { ExecutionStatisticsResult } from "../src/ExecutionStatisticsResult.js";

async function main() {
	const bench = new SimpleBench(100);

	bench.add("Array creation", () => {
		[1, 2, 3, 4, 5];
	});

	bench.add("Object creation", () => {
		({ a: 1, b: 2, c: 3 });
	});

	bench.add("String concatenation", () => {
		"hello" + "world" + "test";
	});

	const benchTasks = await bench.run();

	const results: ExecutionStatisticsResult[] = benchTasks.map((result) => ({
		name: result.name,
		latency: {
			aad: result.latency.aad,
			critical: result.latency.critical,
			df: result.latency.df,
			mad: result.latency.mad,
			max: result.latency.max,
			mean: result.latency.mean,
			min: result.latency.min,
			moe: result.latency.moe,
			p50: result.latency.p50,
			p75: result.latency.p75,
			p99: result.latency.p99,
			p995: result.latency.p995,
			p999: result.latency.p999,
			rme: result.latency.rme,
			samplesCount: result.latency.samplesCount,
			sd: result.latency.sd,
			sem: result.latency.sem,
			variance: result.latency.variance,
		},
		throughput: {
			aad: result.throughput.aad,
			critical: result.throughput.critical,
			df: result.throughput.df,
			mad: result.throughput.mad,
			max: result.throughput.max,
			mean: result.throughput.mean,
			min: result.throughput.min,
			moe: result.throughput.moe,
			p50: result.throughput.p50,
			p75: result.throughput.p75,
			p99: result.throughput.p99,
			p995: result.throughput.p995,
			p999: result.throughput.p999,
			rme: result.throughput.rme,
			samplesCount: result.throughput.samplesCount,
			sd: result.throughput.sd,
			sem: result.throughput.sem,
			variance: result.throughput.variance,
		},
		period: result.period,
		totalTime: result.totalTime,
	}));

	writeFileSync("perf/example.result.json", JSON.stringify(results, null, 2));
	console.log("Results saved to perf/example.result.json");
}

main();

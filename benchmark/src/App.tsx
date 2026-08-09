import exampleResult from "../perf/example.result.json";
import memoryResult from "../perf/memory.result.json";
import gameOverResult from "../perf/gameOver.result.json";
import twoBotsGameOverResult from "../perf/twoBotsGameOver.result.json";
import { ExecutionStatisticsChart } from "./components/ExecutionStatisticsChart.js";
import { MemoryChart } from "./components/MemoryChart.js";
import { BenchmarkResultContainer } from "./components/BenchmarkResultContainer.js";
import type { ExecutionStatisticsResult } from "./ExecutionStatisticsResult.js";
import type { MemoryBenchmarkResult } from "./MemoryBenchmarkResult.js";

const performanceBenchmarks: ExecutionStatisticsResult[] = Array.isArray(exampleResult)
	? exampleResult
	: [exampleResult];

const memoryBenchmarks: MemoryBenchmarkResult[] = [
	...(Array.isArray(memoryResult) ? memoryResult : [memoryResult]),
	...(Array.isArray(gameOverResult) ? gameOverResult : [gameOverResult]),
	...(Array.isArray(twoBotsGameOverResult) ? twoBotsGameOverResult : [twoBotsGameOverResult]),
];

export function App(): React.ReactNode {
	return (
		<div style={{ padding: "20px", fontFamily: "sans-serif" }}>
			<h1>Benchmark Results</h1>

			<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(600px, 1fr))", gap: "20px" }}>
				{performanceBenchmarks.map((benchmark) => (
					<BenchmarkResultContainer key={benchmark.name}>
						<h2>{benchmark.name}</h2>
						<ExecutionStatisticsChart benchmarks={[benchmark]} />
					</BenchmarkResultContainer>
				))}

				{memoryBenchmarks.map((benchmark) => (
					<BenchmarkResultContainer key={benchmark.name}>
						<h2>{benchmark.name}</h2>
						<MemoryChart benchmark={benchmark} />
					</BenchmarkResultContainer>
				))}
			</div>
		</div>
	);
}

import exampleResult from "../perf/example.result.json";
import renderEmptyDisplayResult from "../perf/renderEmptyDisplay.result.json";
import renderFullBoardDisplayResult from "../perf/renderFullBoardDisplay.result.json";
import renderBoardWithPiecesDisplayResult from "../perf/renderBoardWithPiecesDisplay.result.json";
import renderShopDisplayResult from "../perf/renderShopDisplay.result.json";
import renderBenchDisplayResult from "../perf/renderBenchDisplay.result.json";
import renderBoardPiecesResult from "../perf/renderBoardPieces.result.json";
import renderBenchHeroMeshesResult from "../perf/renderBenchHeroMeshes.result.json";
import renderShopProductsResult from "../perf/renderShopProducts.result.json";
import renderPieceHighlightResult from "../perf/renderPieceHighlight.result.json";
import renderPlayerMeshesResult from "../perf/renderPlayerMeshes.result.json";
import renderSynergiesResult from "../perf/renderSynergies.result.json";
import createEmptyDisplayResult from "../perf/createEmptyDisplay.result.json";
import createFullBoardDisplayResult from "../perf/createFullBoardDisplay.result.json";
import createBoardWithPiecesDisplayResult from "../perf/createBoardWithPiecesDisplay.result.json";
import createShopDisplayResult from "../perf/createShopDisplay.result.json";
import createBenchDisplayResult from "../perf/createBenchDisplay.result.json";
import { ExecutionStatisticsChart } from "./components/ExecutionStatisticsChart.js";
import { MemoryChart } from "./components/MemoryChart.js";
import { BenchmarkResultContainer } from "./components/BenchmarkResultContainer.js";
import type { ExecutionStatisticsResult } from "./ExecutionStatisticsResult.js";
import type { MemoryBenchmarkResult } from "./MemoryBenchmarkResult.js";

const performanceBenchmarks: ExecutionStatisticsResult[] = [
	...(Array.isArray(exampleResult) ? exampleResult : [exampleResult]),
	renderEmptyDisplayResult,
	renderFullBoardDisplayResult,
	renderBoardWithPiecesDisplayResult,
	renderShopDisplayResult,
	renderBenchDisplayResult,
];

const memoryRenderBenchmarks: MemoryBenchmarkResult[] = [
	renderBoardPiecesResult,
	renderBenchHeroMeshesResult,
	renderShopProductsResult,
	renderPieceHighlightResult,
	renderPlayerMeshesResult,
	renderSynergiesResult,
];

const memoryDisplayBenchmarks: MemoryBenchmarkResult[] = [
	createEmptyDisplayResult,
	createFullBoardDisplayResult,
	createBoardWithPiecesDisplayResult,
	createShopDisplayResult,
	createBenchDisplayResult,
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

				{memoryRenderBenchmarks.map((benchmark) => (
					<BenchmarkResultContainer key={benchmark.name}>
						<h2>{benchmark.name}</h2>
						<MemoryChart benchmark={benchmark} />
					</BenchmarkResultContainer>
				))}

				{memoryDisplayBenchmarks.map((benchmark) => (
					<BenchmarkResultContainer key={benchmark.name}>
						<h2>{benchmark.name}</h2>
						<MemoryChart benchmark={benchmark} />
					</BenchmarkResultContainer>
				))}
			</div>
		</div>
	);
}

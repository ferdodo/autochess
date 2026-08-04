import { LineChart, Line, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from "recharts";
import type { MemoryBenchmarkResult } from "../MemoryBenchmarkResult.js";

type MemoryChartProps = {
	benchmark: MemoryBenchmarkResult;
};

export function MemoryChart({ benchmark }: MemoryChartProps): React.ReactNode {
	const formatBytes = (bytes: number): string => {
		const mb = bytes / 1024 / 1024;
		return mb.toFixed(2);
	};

	const memoryValues = benchmark.samples.map((s) => s.memory);
	const minMemory = Math.min(...memoryValues);
	const maxMemory = Math.max(...memoryValues);
	const range = maxMemory - minMemory;
	const yAxisMin = Math.max(0, minMemory - range * 0.1);
	const yAxisMax = maxMemory + range * 0.1;

	return (
		<div>
			<ResponsiveContainer width="100%" height={300}>
				<LineChart data={benchmark.samples}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="iteration" />
					<YAxis
						domain={[yAxisMin, yAxisMax]}
						label={{ value: "Memory (MB)", angle: -90, position: "insideLeft" }}
						tickFormatter={(value) => (value / 1024 / 1024).toFixed(2)}
					/>
					<Tooltip
						formatter={(value) => {
							if (typeof value === "number") {
								return [formatBytes(value), ""];
							}
							return value;
						}}
					/>
					<Legend />
					<Line
						type="monotone"
						dataKey="memory"
						stroke="#8884d8"
						name="Memory"
						dot={false}
						isAnimationActive={false}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}

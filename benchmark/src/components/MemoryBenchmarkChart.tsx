import { useState } from "react";
import { LineChart, Line, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from "recharts";
import type { MemoryBenchmarkResult } from "../MemoryBenchmarkResult.js";

type MemoryBenchmarkChartProps = {
	benchmarks: MemoryBenchmarkResult[];
};

export function MemoryBenchmarkChart({ benchmarks }: MemoryBenchmarkChartProps): React.ReactNode {
	const [selectedIndex, setSelectedIndex] = useState<number>(0);
	const benchmark = benchmarks[selectedIndex];

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
			<div style={{ marginBottom: "20px" }}>
				<label htmlFor="memory-select" style={{ marginRight: "10px" }}>
					Select Benchmark:
				</label>
				<select
					id="memory-select"
					value={selectedIndex}
					onChange={(e) => setSelectedIndex(Number(e.target.value))}
					style={{
						padding: "8px",
						fontSize: "14px",
						borderRadius: "4px",
						border: "1px solid #ddd",
					}}
				>
					{benchmarks.map((b, i) => (
						<option key={b.name} value={i}>
							{b.name}
						</option>
					))}
				</select>
			</div>

			<div style={{ marginBottom: "40px" }}>
				<h3>Memory Over Time</h3>
				<ResponsiveContainer width="100%" height={400}>
					<LineChart data={benchmark.samples}>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="iteration" />
						<YAxis
							domain={[yAxisMin, yAxisMax]}
							label={{ value: "Memory (MB)", angle: -90, position: "insideLeft" }}
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
		</div>
	);
}

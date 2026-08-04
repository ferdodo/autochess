import { useState } from "react";
import { BarChart, Bar, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import type { ExecutionStatisticsResult } from "../ExecutionStatisticsResult.js";

type ExecutionStatisticsChartProps = {
	benchmarks: ExecutionStatisticsResult[];
};

type StatisticKey = keyof (ExecutionStatisticsResult["latency"] | ExecutionStatisticsResult["throughput"]);

const STATISTICS: Array<{ label: string; key: StatisticKey; category: "latency" | "throughput" }> = [
	{ label: "Latency - Mean (ms)", key: "mean", category: "latency" },
	{ label: "Latency - Min (ms)", key: "min", category: "latency" },
	{ label: "Latency - Max (ms)", key: "max", category: "latency" },
	{ label: "Latency - P50 (ms)", key: "p50", category: "latency" },
	{ label: "Latency - P75 (ms)", key: "p75", category: "latency" },
	{ label: "Latency - P99 (ms)", key: "p99", category: "latency" },
	{ label: "Latency - P99.5 (ms)", key: "p995", category: "latency" },
	{ label: "Latency - P99.9 (ms)", key: "p999", category: "latency" },
	{ label: "Latency - Std Dev (ms)", key: "sd", category: "latency" },
	{ label: "Throughput - Mean (ops/sec)", key: "mean", category: "throughput" },
	{ label: "Throughput - Min (ops/sec)", key: "min", category: "throughput" },
	{ label: "Throughput - Max (ops/sec)", key: "max", category: "throughput" },
	{ label: "Throughput - P99 (ops/sec)", key: "p99", category: "throughput" },
];

export function ExecutionStatisticsChart({ benchmarks }: ExecutionStatisticsChartProps): React.ReactNode {
	const [selectedStat, setSelectedStat] = useState<number>(0);
	const stat = STATISTICS[selectedStat];

	const chartData = benchmarks.map((benchmark) => {
		const category = stat.category === "latency" ? benchmark.latency : benchmark.throughput;
		return {
			name: benchmark.name,
			value: category[stat.key],
		};
	});

	return (
		<div>
			<div style={{ marginBottom: "20px" }}>
				<label htmlFor="stat-select" style={{ marginRight: "10px" }}>
					Select Statistic:
				</label>
				<select
					id="stat-select"
					value={selectedStat}
					onChange={(e) => setSelectedStat(Number(e.target.value))}
					style={{
						padding: "8px",
						fontSize: "14px",
						borderRadius: "4px",
						border: "1px solid #ddd",
					}}
				>
					{STATISTICS.map((s, i) => (
						<option key={s.label} value={i}>
							{s.label}
						</option>
					))}
				</select>
			</div>

			<ResponsiveContainer width="100%" height={400}>
				<BarChart data={chartData}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
					<YAxis />
					<Tooltip />
					<Bar dataKey="value" fill="#8884d8" />
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}

import type { RenderFunctionsBenchmarkResult } from "../RenderFunctionsBenchmarkResult.js";

interface Props {
	benchmarks: RenderFunctionsBenchmarkResult[];
}

export function RenderFunctionsBenchmarkChart({ benchmarks }: Props): React.ReactNode {
	return (
		<div>
			<table
				style={{
					width: "100%",
					borderCollapse: "collapse",
					fontSize: "14px",
				}}
			>
				<thead>
					<tr style={{ borderBottom: "2px solid #ddd" }}>
						<th style={{ textAlign: "left", padding: "8px" }}>Test Name</th>
						<th style={{ textAlign: "right", padding: "8px" }}>Mean (ms)</th>
						<th style={{ textAlign: "right", padding: "8px" }}>Min (ms)</th>
						<th style={{ textAlign: "right", padding: "8px" }}>Max (ms)</th>
						<th style={{ textAlign: "right", padding: "8px" }}>Throughput</th>
					</tr>
				</thead>
				<tbody>
					{benchmarks.map((bench) => (
						<tr key={bench.name} style={{ borderBottom: "1px solid #eee" }}>
							<td style={{ padding: "8px" }}>{bench.name}</td>
							<td style={{ textAlign: "right", padding: "8px" }}>
								{bench.latency.mean.toFixed(3)}
							</td>
							<td style={{ textAlign: "right", padding: "8px" }}>
								{bench.latency.min.toFixed(3)}
							</td>
							<td style={{ textAlign: "right", padding: "8px" }}>
								{bench.latency.max.toFixed(3)}
							</td>
							<td style={{ textAlign: "right", padding: "8px" }}>
								{bench.throughput.toFixed(0)} ops/s
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

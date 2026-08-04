export interface RenderFunctionsBenchmarkResult {
	name: string;
	latency: {
		mean: number;
		min: number;
		max: number;
		p50: number;
		p75: number;
		p99: number;
		p995: number;
		p999: number;
	};
	throughput: number;
	totalTime: number;
	period: number;
}

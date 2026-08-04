type BenchTask = {
	name: string;
	fn: () => void | Promise<void>;
};

type Stats = {
	mean: number;
	min: number;
	max: number;
	p50: number;
	p75: number;
	p99: number;
	p995: number;
	p999: number;
	sd: number;
	variance: number;
	aad: number;
	mad: number;
	moe: number;
	rme: number;
	sem: number;
	critical: number;
	df: number;
	samplesCount: number;
};

type BenchResult = {
	name: string;
	latency: Stats;
	throughput: Stats;
	totalTime: number;
	period: number;
};

function calculatePercentile(values: number[], p: number): number {
	const sorted = [...values].sort((a, b) => a - b);
	const index = Math.ceil((sorted.length * p) / 100) - 1;
	return sorted[Math.max(0, index)];
}

function calculateStats(times: number[]): Stats {
	const n = times.length;
	const mean = times.reduce((a, b) => a + b, 0) / n;
	const variance = times.reduce((sum, t) => sum + Math.pow(t - mean, 2), 0) / n;
	const sd = Math.sqrt(variance);
	const aad = times.reduce((sum, t) => sum + Math.abs(t - mean), 0) / n;
	const sorted = [...times].sort((a, b) => a - b);
	const mad = sorted[Math.floor(n / 2)];

	return {
		mean,
		min: Math.min(...times),
		max: Math.max(...times),
		p50: calculatePercentile(times, 50),
		p75: calculatePercentile(times, 75),
		p99: calculatePercentile(times, 99),
		p995: calculatePercentile(times, 99.5),
		p999: calculatePercentile(times, 99.9),
		sd,
		variance,
		aad,
		mad,
		moe: 1.96 * (sd / Math.sqrt(n)),
		rme: (sd / mean) * 100,
		sem: sd / Math.sqrt(n),
		critical: 0,
		df: n - 1,
		samplesCount: n,
	};
}

export class SimpleBench {
	private tasks: BenchTask[] = [];
	private iterations: number;

	constructor(iterations: number = 1) {
		this.iterations = iterations;
	}

	add(name: string, fn: () => void | Promise<void>): void {
		this.tasks.push({ name, fn });
	}

	async run(): Promise<BenchResult[]> {
		const results: BenchResult[] = [];

		for (const task of this.tasks) {
			const times: number[] = [];
			const start = performance.now();

			for (let i = 0; i < this.iterations; i++) {
				const iterStart = performance.now();
				await task.fn();
				const iterEnd = performance.now();
				times.push(iterEnd - iterStart);
			}

			const end = performance.now();
			const totalTime = end - start;
			const latencyStats = calculateStats(times);
			const throughputStats = calculateStats(times.map((t) => (1000 / t) * 1000));

			results.push({
				name: task.name,
				latency: latencyStats,
				throughput: throughputStats,
				totalTime,
				period: 0,
			});
		}

		return results;
	}
}

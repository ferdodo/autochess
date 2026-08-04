export type MemoryBenchmarkResult = {
	name: string;
	samples: Array<{
		iteration: number;
		memory: number;
	}>;
};

import type { Metrics } from "../types/metrics.js";

export function createMetrics(): Metrics {
	return {
		initiateGameRequestCount: BigInt(0),
		initiateGameResponseCount: BigInt(0),
		transposeRequestCount: BigInt(0),
		transposeDoneCount: BigInt(0),
	};
}

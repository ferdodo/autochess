import type { Metrics } from "../types/Metrics.js";

export function createMetrics(): Metrics {
	return {
		initiateGameRequestCount: BigInt(0),
		initiateGameResponseCount: BigInt(0),
		transposeRequestCount: BigInt(0),
		transposeDoneCount: BigInt(0),
		transactionBeginCount: BigInt(0),
		transactionEndCount: BigInt(0),
	};
}

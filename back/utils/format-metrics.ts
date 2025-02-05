import type { Metrics } from "../../core/types/metrics.js";
import os from "node:os";
import process from "node:process";

export function formatMetrics(metrics: Metrics) {
	const cpu = os.cpus()[0];

	return `

initiate_game_request_count ${metrics.initiateGameRequestCount}
initiate_game_response_count ${metrics.initiateGameResponseCount}
transpose_request_count ${metrics.transposeRequestCount}
transpose_done_count ${metrics.transposeDoneCount}
transaction_begin_count ${metrics.transactionBeginCount}
transaction_end_count ${metrics.transactionEndCount}
cpu_idle_time ${cpu.times.idle}
process_uptime ${process.uptime()}
heap_total ${process.memoryUsage().heapTotal}

`;
}

import type { Metrics } from "../../core/types/metrics.js";

export function formatMetrics(metrics: Metrics) {
	return `

initiate_game_request_count ${metrics.initiateGameRequestCount}
initiate_game_response_count ${metrics.initiateGameResponseCount}
transpose_request_count ${metrics.transposeRequestCount}
transpose_done_count ${metrics.transposeDoneCount}

`;
}

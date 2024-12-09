import { Phase } from "../types/phase.js";

export function getPhaseDuration(phase: Phase): number {
	switch (phase) {
		case Phase.Planning:
			return 30000;
		case Phase.Combat:
			return 30000;
		default:
			throw new Error(`Unknown phase: ${phase} !`);
	}
}

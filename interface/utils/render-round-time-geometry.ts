import { PlaneGeometry } from "three";
import type { Display } from "core/types/display";
import type { ThreeContext } from "../types/three-context";
import { getPhaseDuration } from "core/utils/get-phase-duration";

export function renderRoundTimeGeometry(
	threeContext: ThreeContext,
	display: Display,
): void {
	const maxWidth = 0.1;

	const phaseDuration = getPhaseDuration(display.phase);

	const timeLeft = Math.max(
		0,
		new Date(display.phaseStartAt).getTime() + phaseDuration - Date.now(),
	);

	const targetWidth = (timeLeft / phaseDuration) * maxWidth;

	if (threeContext.roundTimeGeometry.parameters.width !== targetWidth) {
		threeContext.roundTimeGeometry = new PlaneGeometry(targetWidth, 0.004);
	}
}

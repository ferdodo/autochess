import { PlaneGeometry } from "three";
import type { Display } from "core/types/display";
import type { ThreeContext } from "../types/three-context";

export function renderRoundTimeGeometry(
	threeContext: ThreeContext,
	display: Display,
): void {
	const maxWidth = 0.1;

	const timeLeft = Math.max(
		0,
		new Date(display.phaseStartAt).getTime() + 30000 - Date.now(),
	);

	const targetWidth = (Math.min(25000, timeLeft) / 25000) * maxWidth;

	if (threeContext.roundTimeGeometry.parameters.width !== targetWidth) {
		threeContext.roundTimeGeometry = new PlaneGeometry(targetWidth, 0.004);
	}
}

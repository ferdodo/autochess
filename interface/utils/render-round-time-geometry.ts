import { PlaneGeometry } from "three";
import type { Display } from "core/types/display";
import type { ThreeContext } from "../types/three-context";

export function renderRoundTimeGeometry(
	threeContext: ThreeContext,
	display: Display,
): void {
	const maxWidth = 0.1;
	const targetWidth = (Math.min(15000, display.timeLeft) / 15000) * maxWidth;

	if (threeContext.roundTimeGeometry.parameters.width !== targetWidth) {
		threeContext.roundTimeGeometry = new PlaneGeometry(targetWidth, 0.004);
	}
}

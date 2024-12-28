import type { Display } from "core/types/display";
import type { ThreeContext } from "../types/three-context";
import { Phase } from "core/types/phase";

export function renderCamera(
	threeContext: ThreeContext,
	display: Display,
): void {
	threeContext.camera.position.z = 2;
	threeContext.camera.position.y = 2;
	threeContext.camera.rotation.x = -0.7;
}

import { Mesh } from "three";
import type { ThreeContext } from "../types/three-context";
import type { Display } from "core/types/display";

export function renderBenchTargetBoxes(
	threeContext: ThreeContext,
	display: Display,
): void {
	for (const [_index, slot] of Object.entries(threeContext.benchSlotMeshes)) {
		const index = Number.parseInt(_index);
		const meshCreated = !threeContext.benchTargetBoxes[index];

		if (meshCreated) {
			threeContext.benchTargetBoxes[index] ||= new Mesh(
				threeContext.pieceTargetBoxesGeometry,
				threeContext.pieceTargetBoxesMaterial,
			);

			const mesh: Mesh = threeContext.benchTargetBoxes[index];
			const cubeSize = 1;
			const pieceSize = cubeSize / display.board.w;
			const relativeOriginY = cubeSize / 2 + pieceSize / 2;
			mesh.position.set(slot.position.x, relativeOriginY, slot.position.z);
			threeContext.scene.add(mesh);
			mesh.visible = false;
		}
	}
}

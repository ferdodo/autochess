import type { Display } from "core/src/types/Display";
import type { ThreeContext } from "../types/three-context";
import { createPieceRessources } from "./create-piece-ressources";
import { renderPieceAnimatedTexture } from "./render-piece-animated-texture";
import { renderPieceMaterial } from "./render-piece-material";
import { renderPieceMesh } from "./render-piece-mesh";
import { renderPieceBarsBackgroundMesh } from "./render-piece-bars-background-mesh";
import { renderPieceHealthBarGeometry } from "./render-piece-health-bar-geometry";
import { renderPieceHealthBarMeshes } from "./render-piece-health-bar-meshes";
import { renderPieceGradeMesh } from "./render-piece-grade-mesh";
import { Raycaster } from "three";
import type { Piece } from "core/src/types/Piece";

export function renderBenchHeroMeshes(
	threeContext: ThreeContext,
	display: Display,
): void {
	const benchWithAllSlots: Record<string, Piece | undefined> = {
		"0": undefined,
		"1": undefined,
		"2": undefined,
		"3": undefined,
		"4": undefined,
		"5": undefined,
		...display.bench,
	};

	for (const [_slotNumber, piece] of Object.entries(benchWithAllSlots)) {
		const slotNumber = Number.parseInt(_slotNumber);
		const meshCreated = !threeContext.benchHeroMeshes[slotNumber];

		const pieceRessources =
			threeContext.benchHeroMeshes[slotNumber] ||
			createPieceRessources(threeContext.scene);

		threeContext.benchHeroMeshes[slotNumber] ||= pieceRessources;

		const slot = threeContext.benchSlotMeshes[slotNumber];

		if (piece && slot) {
			if (!slot) {
				throw new Error("Slot not found !");
			}

			threeContext.scene.add(pieceRessources.group);
			pieceRessources.group.position.y = slot.position.y + 0.6;
			pieceRessources.group.position.z = slot.position.z + 0.05;
			pieceRessources.group.position.x = slot.position.x;
		}

		if (piece?.transposed) {
			const raycaster = new Raycaster();

			const direction = threeContext.pointer
				.clone()
				.sub(threeContext.camera.position)
				.normalize();

			raycaster.set(threeContext.camera.position, direction);

			const intersections = raycaster.intersectObject(
				threeContext.transpositionPlane,
			);

			if (!intersections.length) {
				throw new Error("Failed to intersect selected piece with pointer !");
			}

			const [{ point }] = intersections;
			pieceRessources.group.position.copy(point);
		}

		renderPieceAnimatedTexture(pieceRessources, piece);
		renderPieceMaterial(pieceRessources, piece);
		renderPieceMesh(pieceRessources, piece);
		renderPieceBarsBackgroundMesh(pieceRessources, piece);
		renderPieceHealthBarGeometry(pieceRessources, piece);
		renderPieceHealthBarMeshes(pieceRessources, piece);
		renderPieceGradeMesh(pieceRessources, piece);
	}
}

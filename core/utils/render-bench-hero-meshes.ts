import type { Display } from "../types/display";
import type { Context } from "../types/context";
import { createPieceRessources } from "./create-piece-ressources";
import { renderPieceAnimatedTexture } from "./render-piece-animated-texture";
import { renderPieceMaterial } from "./render-piece-material";
import { renderPieceMesh } from "./render-piece-mesh";
import { renderPieceBarsBackgroundMesh } from "./render-piece-bars-background-mesh";
import { renderPieceHealthBarGeometry } from "./render-piece-health-bar-geometry";
import { renderPieceHealthBarMeshes } from "./render-piece-health-bar-meshes";
import { renderPieceGradeMesh } from "./render-piece-grade-mesh";

export function renderBenchHeroMeshes(
	context: Context,
	display: Display,
): void {
	for (const [_slotNumber, piece] of Object.entries(display.bench)) {
		const slotNumber = Number.parseInt(_slotNumber);
		const meshCreated = !context.benchHeroMeshes[slotNumber];

		const pieceRessources =
			context.benchHeroMeshes[slotNumber] ||
			createPieceRessources(context.scene);

		context.benchHeroMeshes[slotNumber] ||= pieceRessources;

		const slot = context.benchSlotMeshes[slotNumber];

		if (!slot) {
			throw new Error("Slot not found !");
		}

		if (meshCreated) {
			context.scene.add(pieceRessources.group);
			pieceRessources.group.position.y = slot.position.y + 0.6;
			pieceRessources.group.position.z = slot.position.z + 0.05;
			pieceRessources.group.position.x = slot.position.x;
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

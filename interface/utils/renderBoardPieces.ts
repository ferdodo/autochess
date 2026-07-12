import type { Display } from "core/src/types/Display";
import type { ThreeContext } from "../types/ThreeContext";
import { renderPieceAnimatedTexture } from "./renderPieceAnimatedTexture";
import type { PieceRessources } from "../types/PieceRessources";
import { renderPieceMaterial } from "./renderPieceMaterial";
import { createPieceRessources } from "./createPieceRessources";
import { renderPieceMesh } from "./renderPieceMesh";
import { renderBoardPieceMeshes } from "./renderBoardPieceMeshes";
import { renderPieceBarsBackgroundMesh } from "./renderPieceBarsBackgroundMesh";
import { renderPieceHealthBarGeometry } from "./renderPieceHealthBarGeometry";
import { renderPieceHealthBarMeshes } from "./renderPieceHealthBarMeshes";
import { renderPieceGradeMesh } from "./renderPieceGradeMesh";

export function renderBoardPieces(
	threeContext: ThreeContext,
	display: Display,
) {
	const pieceIds = display.pieces.map((piece) => piece.hero.id);
	const existingPieceIds = Object.keys(threeContext.boardPieces);
	const allIds = new Set([...pieceIds, ...existingPieceIds]);

	for (const pieceId of allIds) {
		const piece = display.pieces.find((piece) => piece.hero.id === pieceId);

		const pieceRessource: PieceRessources =
			threeContext.boardPieces[pieceId] ||
			createPieceRessources(threeContext.scene);

		threeContext.boardPieces[pieceId] ||= pieceRessource;
		renderPieceAnimatedTexture(pieceRessource, piece);
		renderPieceMaterial(pieceRessource, piece);
		renderPieceMesh(pieceRessource, piece);
		renderPieceBarsBackgroundMesh(pieceRessource, piece);
		renderPieceHealthBarGeometry(pieceRessource, piece);
		renderPieceHealthBarMeshes(pieceRessource, piece);
		renderPieceGradeMesh(pieceRessource, piece);
	}

	renderBoardPieceMeshes(threeContext, display);
}

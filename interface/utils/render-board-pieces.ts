import type { Display } from "core/types/display";
import type { Context } from "../types/context";
import { renderPieceAnimatedTexture } from "./render-piece-animated-texture";
import type { PieceRessources } from "../types/piece-ressources";
import { renderPieceMaterial } from "./render-piece-material";
import { createPieceRessources } from "./create-piece-ressources";
import { renderPieceMesh } from "./render-piece-mesh";
import { renderBoardPieceMeshes } from "./render-board-piece-meshes";
import { renderPieceBarsBackgroundMesh } from "./render-piece-bars-background-mesh";
import { renderPieceHealthBarGeometry } from "./render-piece-health-bar-geometry";
import { renderPieceHealthBarMeshes } from "./render-piece-health-bar-meshes";
import { renderPieceGradeMesh } from "./render-piece-grade-mesh";

export function renderBoardPieces(context: Context, display: Display) {
	const pieceIds = display.pieces.map((piece) => piece.id);
	const existingPieceIds = Object.keys(context.boardPieces);
	const allIds = new Set([...pieceIds, ...existingPieceIds]);

	for (const pieceId of allIds) {
		const piece = display.pieces.find((piece) => piece.id === pieceId);

		const pieceRessource: PieceRessources =
			context.boardPieces[pieceId] || createPieceRessources(context.scene);

		context.boardPieces[pieceId] ||= pieceRessource;
		renderPieceAnimatedTexture(pieceRessource, piece);
		renderPieceMaterial(pieceRessource, piece);
		renderPieceMesh(pieceRessource, piece);
		renderPieceBarsBackgroundMesh(pieceRessource, piece);
		renderPieceHealthBarGeometry(pieceRessource, piece);
		renderPieceHealthBarMeshes(pieceRessource, piece);
		renderPieceGradeMesh(pieceRessource, piece);
	}

	renderBoardPieceMeshes(context, display);
}

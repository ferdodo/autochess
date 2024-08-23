import { createCamera } from "./utils/create-camera";
import { startWith, pairwise, tap } from "rxjs";
import { mapRenderer } from "./utils/map-renderer";
import { observeWindowDimentions } from "./utils/observe-window-dimentions";
import { getWindowDimentions } from "./utils/get-window-dimentions";
import { removeRenderer } from "./utils/remove-renderer";
import { createContext } from "./utils/create-context";
import { DisplayFactory } from "core/utils/display-factory";
import type { Display } from "core/types/display";
import { renderPieceGeometry } from "./utils/render-piece-geometry";
import { renderPieceAnimatedTexture } from "./utils/render-piece-animated-texture";
import { renderPieceMaterial } from "./utils/render-piece-material";
import { renderPieceMesh } from "./utils/render-piece-mesh";
import { renderPiecesBarsBackgroundGeometry } from "./utils/render-piece-bars-background-geometry";
import { renderPieceBarsBackgroundMesh } from "./utils/render-piece-bars-background-mesh";
import { renderPieceHealthBarGeometry } from "./utils/render-piece-health-bar-geometry";
import { renderPieceHealthBarMeshes } from "./utils/render-piece-health-bar-meshes";
import { renderPieceGradeMesh } from "./utils/render-piece-grade-mesh";

const context = createContext();
const camera = createCamera();

observeWindowDimentions()
	.pipe(
		startWith(getWindowDimentions()),
		mapRenderer(context.scene, camera),
		pairwise(),
		tap(([oldRenderer]) => removeRenderer(oldRenderer)),
	)
	.subscribe();

new DisplayFactory()
	.simulatePiece()
	.simulatePiece()
	.simulatePiece()
	.simulatePiece()
	.simulatePiece()
	.subscribe({
		next(display: Display) {
			renderPieceGeometry(context, display);
			renderPieceAnimatedTexture(context, display);
			renderPieceMaterial(context, display);
			renderPieceMesh(context, display);
			renderPiecesBarsBackgroundGeometry(context, display);
			renderPieceBarsBackgroundMesh(context, display);
			renderPieceHealthBarGeometry(context, display);
			renderPieceHealthBarMeshes(context, display);
			renderPieceGradeMesh(context, display);
		},
	});

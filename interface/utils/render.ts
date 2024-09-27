import type { Display } from "core/types/display";
import { renderShopProductBackgroundMeshes } from "./render-shop-product-background-meshes";
import { renderShopProductImageMeshes } from "./render-shop-product-image-meshes";
import type { ThreeContext } from "../types/three-context";
import { renderShopProductTraitMeshes } from "./render-product-trait-meshes";
import { renderShopProductAppellationMeshes } from "./render-shop-product-appellation-meshes";
import { renderBenchHeroMeshes } from "./render-bench-hero-meshes";
import { renderPointerHelper } from "./render-pointer-helper";
import { renderPieceTargetBoxes } from "./render-piece-target-boxes";
import { renderPieceHighlight } from "./render-piece-highlight";
import { renderBoardPieces } from "./render-board-pieces";
import { renderMoneyGeometry } from "./render-money-geometry";
import { renderMoneyMesh } from "./render-money-mesh";
import { renderHealthGeometry } from "./render-health-geometry";
import { renderHealthMesh } from "./render-health-mesh";
import { renderPlayerGeometry } from "./render-player-geometry";
import { renderplayerMeshes } from "./render-player-meshes";

export function render(threeContext: ThreeContext, display: Display) {
	renderBoardPieces(threeContext, display);
	renderShopProductBackgroundMeshes(threeContext, display);
	renderShopProductImageMeshes(threeContext, display);
	renderShopProductTraitMeshes(threeContext, display);
	renderShopProductAppellationMeshes(threeContext, display);
	renderBenchHeroMeshes(threeContext, display);
	renderPointerHelper(threeContext);
	renderPieceTargetBoxes(threeContext, display);
	renderPieceHighlight(threeContext, display);
	renderMoneyGeometry(threeContext, display);
	renderMoneyMesh(threeContext, display);
	renderHealthGeometry(threeContext, display);
	renderHealthMesh(threeContext, display);
	renderPlayerGeometry(threeContext, display);
	renderplayerMeshes(threeContext, display);
}

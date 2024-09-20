import type { Display } from "../types/display";
import { renderShopProductBackgroundMeshes } from "./render-shop-product-background-meshes";
import { renderShopProductImageMeshes } from "./render-shop-product-image-meshes";
import type { Context } from "../types/context";
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

export function render(context: Context, display: Display) {
	renderBoardPieces(context, display);
	renderShopProductBackgroundMeshes(context, display);
	renderShopProductImageMeshes(context, display);
	renderShopProductTraitMeshes(context, display);
	renderShopProductAppellationMeshes(context, display);
	renderBenchHeroMeshes(context, display);
	renderPointerHelper(context);
	renderPieceTargetBoxes(context, display);
	renderPieceHighlight(context, display);
	renderMoneyGeometry(context, display);
	renderMoneyMesh(context, display);
	renderHealthGeometry(context, display);
	renderHealthMesh(context, display);
}

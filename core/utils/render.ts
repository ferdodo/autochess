import type { Display } from "../types/display";
import { renderPieceGeometry } from "./render-piece-geometry";
import { renderPieceAnimatedTexture } from "./render-piece-animated-texture";
import { renderPieceMaterial } from "./render-piece-material";
import { renderPieceMesh } from "./render-piece-mesh";
import { renderPiecesBarsBackgroundGeometry } from "./render-piece-bars-background-geometry";
import { renderPieceBarsBackgroundMesh } from "./render-piece-bars-background-mesh";
import { renderPieceHealthBarGeometry } from "./render-piece-health-bar-geometry";
import { renderPieceHealthBarMeshes } from "./render-piece-health-bar-meshes";
import { renderPieceGradeMesh } from "./render-piece-grade-mesh";
import { renderShopProductBackgroundMeshes } from "./render-shop-product-background-meshes";
import { renderShopProductImageMeshes } from "./render-shop-product-image-meshes";
import type { Context } from "../types/context";
import { renderShopProductTraitMeshes } from "./render-product-trait-meshes";
import { renderShopProductAppellationMeshes } from "./render-shop-product-appellation-meshes";
import { renderBenchHeroMeshes } from "./render-bench-hero-meshes";
import { renderPointerHelper } from "./render-pointer-helper";
import { renderPieceTargetBoxes } from "./render-piece-target-boxes";
import { renderPieceHighlight } from "./render-piece-highlight";

export function render(context: Context, display: Display) {
	renderPieceGeometry(context, display);
	renderPieceAnimatedTexture(context, display);
	renderPieceMaterial(context, display);
	renderPieceMesh(context, display);
	renderPiecesBarsBackgroundGeometry(context, display);
	renderPieceBarsBackgroundMesh(context, display);
	renderPieceHealthBarGeometry(context, display);
	renderPieceHealthBarMeshes(context, display);
	renderPieceGradeMesh(context, display);
	renderShopProductBackgroundMeshes(context, display);
	renderShopProductImageMeshes(context, display);
	renderShopProductTraitMeshes(context, display);
	renderShopProductAppellationMeshes(context, display);
	renderBenchHeroMeshes(context, display);
	renderPointerHelper(context);
	renderPieceTargetBoxes(context, display);
	renderPieceHighlight(context, display);
}

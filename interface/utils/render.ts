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
import { renderPlayerGeometry } from "./render-player-geometry";
import { renderplayerMeshes } from "./render-player-meshes";
import { renderBenchTargetBoxes } from "./render-bench-target-boxes";
import { renderRerollBackgroundMesh } from "./render-reroll-background-mesh";
import { renderRerollMesh } from "./render-reroll-mesh";
import { renderLevelUpBackgroundMesh } from "./render-level-up-background-mesh";
import { renderLevelUpMesh } from "./render-level-up-mesh";
import type { Observable } from "rxjs";
import { Subject } from "rxjs";

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
	renderPlayerGeometry(threeContext, display);
	renderplayerMeshes(threeContext, display);
	renderBenchTargetBoxes(threeContext, display);
	renderRerollBackgroundMesh(threeContext, display);
	renderRerollMesh(threeContext, display);
	renderLevelUpBackgroundMesh(threeContext, display);
	renderLevelUpMesh(threeContext, display);
	_renderCalls$.next();
}

const _renderCalls$ = new Subject<void>();

export const renderCalls$: Observable<void> = _renderCalls$;

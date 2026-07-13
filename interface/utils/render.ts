import type { Display } from "core/src/types/Display";
import { renderShopProductBackgroundMeshes } from "./renderShopProductBackgroundMeshes";
import { renderShopProductImageMeshes } from "./renderShopProductImageMeshes";
import type { ThreeContext } from "../types/ThreeContext";
import { renderShopProductTraitMeshes } from "./renderShopProductTraitMeshes";
import { renderShopProductAppellationMeshes } from "./renderShopProductAppellationMeshes";
import { renderBenchHeroMeshes } from "./renderBenchHeroMeshes";
import { renderPointerHelper } from "./renderPointerHelper";
import { renderPieceTargetBoxes } from "./renderPieceTargetBoxes";
import { renderPieceHighlight } from "./renderPieceHighlight";
import { renderBoardPieces } from "./renderBoardPieces";
import { renderMoneyGeometry } from "./renderMoneyGeometry";
import { renderMoneyMesh } from "./renderMoneyMesh";
import { renderPlayerGeometry } from "./renderPlayerGeometry";
import { renderplayerMeshes } from "./renderplayerMeshes";
import { renderBenchTargetBoxes } from "./renderBenchTargetBoxes";
import { renderRerollBackgroundMesh } from "./renderRerollBackgroundMesh";
import { renderRerollMesh } from "./renderRerollMesh";
import { renderLevelUpBackgroundMesh } from "./renderLevelUpBackgroundMesh";
import { renderLevelUpMesh } from "./renderLevelUpMesh";
//import type { Observable } from "rxjs";
//import { Subject } from "rxjs";
import { renderLevelUpGeometry } from "./renderLevelUpGeometry";
import { renderRoundTimeMesh } from "./renderRoundTimeMesh";
import { renderRoundTimeGeometry } from "./renderRoundTimeGeometry";
import { renderCameraOverride } from "./renderCameraOverride";

export function render(threeContext: ThreeContext, display: Display) {
	renderCameraOverride(threeContext, display);
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
	renderLevelUpGeometry(threeContext, display);
	renderLevelUpMesh(threeContext, display);
	renderRoundTimeGeometry(threeContext, display);
	renderRoundTimeMesh(threeContext, display);
}

//const _renderCalls$ = new Subject<void>();

//export const renderCalls$: Observable<void> = _renderCalls$;

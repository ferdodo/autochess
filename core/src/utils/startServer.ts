import { merge } from "rxjs";
import { share } from "rxjs/operators";
import type { Observable } from "rxjs";
import { initiateGameHandle } from "../api/initiateGameHandle.js";
import { observeGameHandle } from "../api/observeGameHandle.js";
import { matchmake } from "../workflows/matchmake.js";
import { rerollHandle } from "../api/rerollHandle.js";
import { levelUpHandle } from "../api/levelUpHandle.js";
import { transposeHandle } from "../api/transposeHandle.js";
import { setCombatPhase } from "../workflows/setCombatPhase.js";
import { setPlanningPhase } from "../workflows/setPlanningPhase.js";
import { shopBuyHandle } from "../api/shopBuyHandle.js";
import { concludeGame } from "../workflows/concludeGame.js";
import type { BackContext } from "../types/BackContext.js";

export function startServer(context: BackContext): Observable<void> {
	return merge(
		initiateGameHandle(context),
		observeGameHandle(context),
		matchmake(context),
		rerollHandle(context),
		levelUpHandle(context),
		transposeHandle(context),
		setCombatPhase(context),
		setPlanningPhase(context),
		shopBuyHandle(context),
		concludeGame(context),
	).pipe(share());
}

import { initiateGameHandle } from "../api/initiate-game-handle.js";
import { levelUpHandle } from "../api/level-up-handle.js";
import { observeGameHandle } from "../api/observe-game-handle.js";
import { rerollHandle } from "../api/reroll-handle.js";
import { shopBuyHandle } from "../api/shop-buy-handle.js";
import { transposeHandle } from "../api/transpose-handle.js";
import type { BackContext } from "../types/back-context.js";
import { concludeGame } from "../workflows/conclude-game.js";
import { matchmake } from "../workflows/matchmake.js";
import { setCombatPhase } from "../workflows/set-combat-phase.js";
import { setPlanningPhase } from "../workflows/set-planning-phase.js";
import { merge } from "rxjs";
import { share } from "rxjs/operators";
import type { Observable } from "rxjs";

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

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

export function startServer(
	context: BackContext,
	saveLog: <T>(log: T) => void = () => {},
) {
	const subscriptions = [
		merge(
			initiateGameHandle(context),
			observeGameHandle(context),
			matchmake(context),
			rerollHandle(context),
			levelUpHandle(context),
			transposeHandle(context),
			setCombatPhase(context),
		)
			.pipe(share())
			.subscribe({
				error: saveLog,
			}),
		setPlanningPhase(context),
		shopBuyHandle(context),
		concludeGame(context),
	];

	return function stopServer() {
		for (const subscription of subscriptions) {
			subscription.unsubscribe();
		}
	};
}

import { initiateGameHandle } from "../api/initiate-game-handle";
import { levelUpHandle } from "../api/level-up-handle";
import { observeGameHandle } from "../api/observe-game-handle";
import { rerollHandle } from "../api/reroll-handle";
import type { BackContext } from "../types/back-context";
import { matchmake } from "./matchmake";

export function startServer(context: BackContext) {
	const subscriptions = [
		initiateGameHandle(context),
		observeGameHandle(context),
		matchmake(context),
		rerollHandle(context),
		levelUpHandle(context),
	];

	return function stopServer() {
		for (const subscription of subscriptions) {
			subscription.unsubscribe();
		}
	};
}

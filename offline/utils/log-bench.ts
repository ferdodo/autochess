import type { FrontContext } from "core/types/front-context";
import { observeGame } from "core/api/observe-game";

export function logBench(frontContext: FrontContext) {
	const publicKey = frontContext.publicKey;

	observeGame(frontContext).subscribe((game) => {
		console.table(game.playerBenches[publicKey]);
	});
}

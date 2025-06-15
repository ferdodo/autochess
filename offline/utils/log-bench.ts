import type { FrontContext } from "core/src/types/FrontContext";
import { observeGame } from "core/src/api/observeGame";

export function logBench(frontContext: FrontContext) {
	const publicKey = frontContext.publicKey;

	observeGame(frontContext).subscribe((game) => {
		console.table(game.playerBenches[publicKey]);
	});
}

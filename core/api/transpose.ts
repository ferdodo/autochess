import type { FrontContext } from "../types/front-context";
import type { PieceSlot } from "../types/piece-slot";
import { getCachedGame } from "../utils/get-cached-gamed";

export async function transpose(
	frontContext: FrontContext,
	grabPiece: PieceSlot,
	ungrabPiece: PieceSlot,
) {
	const { connection, publicKey, signMessage } = frontContext;
	const cachedGame = await getCachedGame(frontContext);

	connection.send({
		transposeRequest: await signMessage({
			publicKey,
			grabPiece,
			ungrabPiece,
			cachedGame,
		}),
	});
}

import type { FrontContext } from "../types/front-context";
import type { PieceSlot } from "../types/piece-slot";

export async function transpose(
	frontContext: FrontContext,
	grabPiece: PieceSlot,
	ungrabPiece: PieceSlot,
) {
	const { connection, publicKey, signMessage, stamp, playsig } = frontContext;

	if (!stamp) {
		throw new Error("stamp is required to transpose a piece !");
	}

	if (!playsig) {
		throw new Error("playsig is required to transpose a piece !");
	}

	connection.send({
		transposeRequest: await signMessage({
			publicKey,
			playsig,
			grabPiece,
			ungrabPiece,
			stamp,
		}),
	});
}

import type { TransposeRequest } from "../types/TransposeRequest.js";
import { getBoardBlock } from "./getBoardBlock.js";

export function isTranspositionLegal(transposeRequest: TransposeRequest) {
	const boardBlock = getBoardBlock();

	if ((transposeRequest.ungrabPiece.positionX || 0) >= boardBlock.w / 2) {
		return false;
	}

	if ((transposeRequest.ungrabPiece.positionY || 0) >= boardBlock.h) {
		return false;
	}

	return true;
}

import { Group } from "three";
import type { PieceRessources } from "../types/piece-ressources";
import type { Scene } from "three";

export function createPieceRessources(scene: Scene): PieceRessources {
	const pieceRessources = {
		grades: {},
		group: new Group(),
	};

	scene.add(pieceRessources.group);

	return pieceRessources;
}

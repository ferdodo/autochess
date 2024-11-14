import type { Block } from "blockwise";
import type { Piece } from "./piece";
import type { Phase } from "./phase";
import type { PlayerDisplay } from "./player-display";
import type { Appellation } from "./appellation";

export interface Display {
	pieces: Piece[];
	players: PlayerDisplay[];
	shop: Appellation[];
	bench: Record<number, Piece>;
	phase: Phase;
	money: number;
	levelUpCost: number | null;
	timeLeft: number;
}

import type { Piece } from "./piece.js";
import type { Phase } from "./phase.js";
import type { PlayerDisplay } from "./player-display.js";
import type { Appellation } from "./appellation.js";

export interface Display {
	pieces: Piece[];
	level: number;
	players: PlayerDisplay[];
	shop: Appellation[];
	bench: Record<number, Piece>;
	phase: Phase;
	money: number;
	levelUpCost: number | null;
	phaseStartAt: string;
}

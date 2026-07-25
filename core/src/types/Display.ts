import type { Appellation } from "./Appellation.js";
import type { Phase } from "./Phase.js";
import type { Piece } from "./Piece.js";
import type { PlayerDisplay } from "./PlayerDisplay.js";
import type { ViewDisplay } from "./ViewDisplay.js";

export interface Display {
	pieces: Piece[];
	level: number;
	players: PlayerDisplay[];
	shop: (Appellation | null)[];
	bench: Record<number, Piece>;
	phase: Phase;
	money: number;
	levelUpCost: number | null;
	phaseStartAt: string;
	viewDisplay: ViewDisplay;
}

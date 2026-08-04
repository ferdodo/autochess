type Phase = "shopping" | "combat";

interface Display {
	pieces: unknown[];
	level: number;
	players: unknown[];
	shop: unknown[];
	bench: Record<number, unknown>;
	phase: Phase;
	money: number;
	levelUpCost: number | null;
	phaseStartAt: string;
	viewDisplay: unknown;
	synergies: unknown[];
}

export function createEmptyDisplay(): Display {
	const shopping: Phase = "shopping";
	return {
		pieces: [],
		level: 1,
		players: [],
		shop: [null, null, null, null, null],
		bench: {},
		phase: shopping,
		money: 0,
		levelUpCost: null,
		phaseStartAt: new Date().toISOString(),
		viewDisplay: {
			playerIndex: 0,
			selectedPieceIndex: null,
			hoveredPieceIndex: null,
		},
		synergies: [],
	};
}

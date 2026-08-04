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

export function createBoardWithPiecesDisplay(): Display {
	const shopping: Phase = "shopping";
	return {
		pieces: Array.from({ length: 10 }, (_, i) => ({
			uuid: `piece-${i}`,
			index: i,
			heroIndex: i,
			level: 1,
			grade: 0,
			traits: [],
			cost: 1,
		})),
		level: 3,
		players: Array.from({ length: 8 }, (_, i) => ({
			index: i,
			name: `Player ${i}`,
			health: 100,
			money: 50,
			level: 3,
		})),
		shop: [null, null, null, null, null],
		bench: {},
		phase: shopping,
		money: 50,
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

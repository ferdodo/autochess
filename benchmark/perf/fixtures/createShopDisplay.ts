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

export function createShopDisplay(): Display {
	const shopping: Phase = "shopping";
	return {
		pieces: [],
		level: 1,
		players: Array.from({ length: 8 }, (_, i) => ({
			index: i,
			name: `Player ${i}`,
			health: 100,
			money: 50,
			level: 1,
		})),
		shop: Array.from({ length: 5 }, (_, i) => ({
			index: i,
			name: `Hero ${i}`,
			cost: (i % 5) + 1,
		})),
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

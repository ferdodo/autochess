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

export function createBenchDisplay(): Display {
	const shopping: Phase = "shopping";
	const grades: (0 | 1 | 2)[] = [0, 1, 2];
	return {
		pieces: [],
		level: 5,
		players: Array.from({ length: 8 }, (_, i) => ({
			index: i,
			name: `Player ${i}`,
			health: 75,
			money: 30,
			level: 5,
		})),
		shop: [null, null, null, null, null],
		bench: Object.fromEntries(
			Array.from({ length: 9 }, (_, i) => [
				i,
				{
					uuid: `bench-${i}`,
					index: i,
					heroIndex: i,
					level: (i % 3) + 1,
					grade: grades[i % 3],
					traits: [],
					cost: (i % 5) + 1,
				},
			]),
		),
		phase: shopping,
		money: 30,
		levelUpCost: 6,
		phaseStartAt: new Date().toISOString(),
		viewDisplay: {
			playerIndex: 0,
			selectedPieceIndex: null,
			hoveredPieceIndex: 0,
		},
		synergies: Array.from({ length: 5 }, (_, i) => ({
			index: i,
			level: (i % 2) + 1,
			activated: false,
		})),
	};
}

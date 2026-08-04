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

interface ThreeContext {
	scene: unknown;
	camera: unknown;
	renderer: unknown;
	boardPieces: unknown[];
	benchHeroMeshes: unknown[];
	pieceHighlightMeshes: unknown[];
	[key: string]: unknown;
}

function createMockThreeContext(): ThreeContext {
	return {
		scene: { add: () => {}, remove: () => {} },
		camera: { position: { x: 0, y: 0, z: 0 } },
		renderer: { render: () => {} },
		boardPieces: Array(30).fill(null),
		benchHeroMeshes: Array(10).fill(null),
		pieceHighlightMeshes: Array(40).fill(null),
		shopProductBackgroundMeshes: Array(5).fill(null),
		shopProductImageMeshes: Array(5).fill(null),
		shopProductAppellationMeshes: Array(5).fill(null),
		shopProductTraitMeshes: Array(5).fill(null),
		shopProductCostMeshes: Array(5).fill(null),
		benchTargetBoxes: Array(10).fill(null),
		rerollMesh: null,
		levelUpMesh: null,
		moneyMesh: null,
		playerMeshes: Array(8).fill(null),
		roundTimeMesh: null,
		synergyMeshes: Array(8).fill(null),
		pointer: { x: 0, y: 0 },
	};
}

export function createDisplayWithBoardPiecesFixture(): [ThreeContext, Display] {
	const combat: Phase = "combat";
	const grades: (0 | 1 | 2 | 3 | 4)[] = [0, 1, 2, 3, 4];
	const threeContext = createMockThreeContext();
	const display: Display = {
		pieces: Array.from({ length: 30 }, (_, i) => ({
			uuid: `piece-${i}`,
			index: i,
			heroIndex: i % 10,
			level: (i % 3) + 1,
			grade: grades[i % 5],
			traits: [],
			cost: (i % 5) + 1,
		})),
		level: 7,
		players: Array.from({ length: 8 }, (_, i) => ({
			index: i,
			name: `Player ${i}`,
			health: 50 - i * 5,
			money: 30,
			level: 5,
		})),
		shop: Array.from({ length: 5 }, (_, i) => ({
			index: i,
			name: `Hero ${i}`,
			cost: (i % 5) + 1,
		})),
		bench: Object.fromEntries(
			Array.from({ length: 10 }, (_, i) => [
				i,
				{
					uuid: `bench-${i}`,
					index: i,
					heroIndex: i,
					level: 1,
					grade: 0,
					traits: [],
					cost: 1,
				},
			]),
		),
		phase: combat,
		money: 30,
		levelUpCost: 5,
		phaseStartAt: new Date().toISOString(),
		viewDisplay: {
			playerIndex: 0,
			selectedPieceIndex: 0,
			hoveredPieceIndex: null,
		},
		synergies: Array.from({ length: 8 }, (_, i) => ({
			index: i,
			level: (i % 3) + 1,
			activated: i % 2 === 0,
		})),
	};
	return [threeContext, display];
}

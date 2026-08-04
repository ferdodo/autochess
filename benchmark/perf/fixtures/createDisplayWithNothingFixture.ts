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

export function createDisplayWithNothingFixture(): [ThreeContext, Display] {
	const shopping: Phase = "shopping";
	const threeContext = createMockThreeContext();
	const display: Display = {
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
	return [threeContext, display];
}

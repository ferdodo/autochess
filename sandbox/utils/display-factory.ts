import { Subject, interval, map, combineLatestWith, startWith } from "rxjs";
import { uid } from "uid";
import { Animation } from "core/types/animation";
import type { Display } from "core/types/display";
import type { Piece } from "core/types/piece";
import type { Subscription, Subscribable, Observer } from "rxjs";
import { GUI } from "dat.gui";
import { getRandomAppellation } from "core/utils/get-random-appellation";
import { Phase } from "core/types/phase";
import { observeInteractions } from "interface/utils/observe-interactions";
import type { ThreeContext } from "interface/types/three-context";
import { createRandomPiece } from "./create-random-piece";

interface PieceHandle {
	id: string;
	iterator: IterableIterator<Piece>;
	simulated: boolean;
	startSimulation: () => DisplayFactory;
	stopSimulation: () => DisplayFactory;
	setTransposed: () => DisplayFactory;
	unsetTransposed: () => DisplayFactory;
	removePiece: () => DisplayFactory;
	gui: GUI;
}

export class DisplayFactory implements Subscribable<Display> {
	display: Display = {
		board: { x: 0, y: 0, w: 10, h: 10 },
		pieces: [],
		players: (<[string, number, number, boolean][]>[
			["player 1", 50, 5, false],
			["player 2", 50, 5, false],
			["player 3", 50, 4, false],
			["my player", 50, 6, true],
			["player 5", 50, 6, false],
			["player 6", 50, 5, false],
			["player 7", 50, 5, false],
			["player 8", 50, 4, false],
		]).map(([name, health, level, isMe]) => ({
			name,
			health,
			level,
			isMe,
		})),
		bench: [
			{
				hero: {
					id: uid(),
					appellation: getRandomAppellation(),
					position: { x: 0, y: 0, w: 0, h: 0 },
					attributes: { maxHealth: 100, health: 100, maxMana: 50, mana: 50 },
					grade: 1,
				},
				animation: Animation.Idle,
				transposed: false,
				animationStartAt: Date.now(),
				right: false,
			},
			{
				hero: {
					id: uid(),
					appellation: getRandomAppellation(),
					grade: 1,
					position: { x: 0, y: 0, w: 0, h: 0 },
					attributes: { maxHealth: 100, health: 100, maxMana: 50, mana: 50 },
				},
				animation: Animation.Idle,
				transposed: false,
				animationStartAt: Date.now(),
				right: false,
			},
		],
		shop: [
			getRandomAppellation(),
			getRandomAppellation(),
			getRandomAppellation(),
		],
		phase: Phase.Combat,
		money: 100,
		levelUpCost: 40,
		timeLeft: 15000,
	};

	gui: GUI = new GUI();
	pieceHandles: PieceHandle[] = [];

	constructor(threeContext: ThreeContext) {
		this.gui.add(this, "addPiece");
		this.gui.add(this, "setPlanningPhase");
		this.gui.add(this, "setCombatPhase");
		this.gui.close();

		observeInteractions(threeContext, this.display).subscribe((interaction) => {
			const transposedPiece = this.display.pieces.find(
				(piece) => piece.transposed,
			);

			if (interaction.grabBoardPiece && !transposedPiece) {
				for (const piece of this.display.pieces) {
					const handle = this.pieceHandles.find(
						(handle) => handle.id === piece.hero.id,
					);

					if (!handle) {
						continue;
					}

					if (
						interaction.grabBoardPiece.positionX === piece.hero.position.x &&
						interaction.grabBoardPiece.positionY === piece.hero.position.y
					) {
						handle.setTransposed();
						handle.stopSimulation();
						break;
					}
				}
			}

			if (interaction.ungrabPiece && transposedPiece) {
				if (transposedPiece) {
					const handle = this.pieceHandles.find(
						(handle) => handle.id === transposedPiece.hero.id,
					);

					if (handle) {
						const x =
							interaction.ungrabPiece.positionX ??
							transposedPiece.hero.position.x;

						const y =
							interaction.ungrabPiece.positionY ??
							transposedPiece.hero.position.y;

						transposedPiece.hero.position = { x, y, w: 0, h: 0 };
						handle.unsetTransposed();

						setTimeout(() => {
							handle.startSimulation();
						}, 1500);
					}
				}
			}
		});
	}

	get pieceIterators(): IterableIterator<Piece>[] {
		return this.pieceHandles
			.filter((handle) => handle.simulated)
			.map((handle) => handle.iterator);
	}

	setPlanningPhase(): DisplayFactory {
		this.display.phase = Phase.Planning;
		return this;
	}

	setCombatPhase(): DisplayFactory {
		this.display.phase = Phase.Combat;
		return this;
	}

	addPiece(): DisplayFactory {
		const iterator = this.#addPiece();
		const piece = iterator.next().value;
		this.display.pieces.push(piece);
		const gui = this.gui.addFolder(piece.hero.id);

		const pieceHandle = {
			id: piece.hero.id,
			iterator,
			simulated: true,
			startSimulation: () => {
				pieceHandle.simulated = true;
				return this;
			},
			stopSimulation: () => {
				pieceHandle.simulated = false;

				this.display.pieces = this.display.pieces.map((p) => {
					if (p.hero.id === piece.hero.id) {
						return {
							...p,
							animation: Animation.Idle,
							animationStartAt: Date.now(),
						};
					}

					return p;
				});

				return this;
			},
			removePiece: () => {
				this.display.pieces = this.display.pieces.filter(
					(p) => p.hero.id !== piece.hero.id,
				);

				gui.hide();

				this.pieceHandles = this.pieceHandles.filter(
					(handle) => handle.id !== piece.hero.id,
				);

				return this;
			},
			setTransposed: () => {
				this.display.pieces = this.display.pieces.map((p) => {
					piece.transposed = true;
					return p.hero.id === piece.hero.id ? { ...p, transposed: true } : p;
				});

				return this;
			},
			unsetTransposed: () => {
				this.display.pieces = this.display.pieces.map((p) => {
					piece.transposed = false;
					return p.hero.id === piece.hero.id ? { ...p, transposed: false } : p;
				});

				return this;
			},

			gui,
		};

		gui.add(pieceHandle, "startSimulation");
		gui.add(pieceHandle, "stopSimulation");
		gui.add(pieceHandle, "setTransposed");
		gui.add(pieceHandle, "unsetTransposed");
		gui.add(pieceHandle, "removePiece");

		this.pieceHandles.push(pieceHandle);
		return this;
	}

	*#addPiece(): IterableIterator<Piece> {
		const initialPiece = createRandomPiece(this.display);

		const getPiece = () =>
			this.display.pieces.find(
				(piece) => piece.hero.id === initialPiece.hero.id,
			) || initialPiece;

		while (true) {
			const action = Math.floor(Math.random() * 6);

			switch (action) {
				case 0: {
					let piece = getPiece();

					if (piece.animation === Animation.Idle) {
						break;
					}

					piece = {
						...piece,
						hero: {
							...piece.hero,
							attributes: {
								...piece.hero.attributes,
								health: piece.hero.attributes.maxHealth,
							},
						},
						animation: Animation.Idle,
						animationStartAt: Date.now(),
					};

					yield { ...piece };
					break;
				}
				case 1: {
					const piece = getPiece();

					if (piece.animation === Animation.Attack) {
						break;
					}
					piece.animation = Animation.Attack;
					piece.animationStartAt = Date.now();
					yield { ...piece };
					break;
				}
				case 2: {
					const piece = getPiece();

					if (piece.animation === Animation.Death) {
						break;
					}

					piece.animation = Animation.Death;
					piece.animationStartAt = Date.now();
					yield { ...piece };
					break;
				}
				case 3: {
					const piece = getPiece();

					if (piece.animation === Animation.Ability) {
						break;
					}

					piece.animation = Animation.Ability;
					piece.animationStartAt = Date.now();
					yield { ...piece };
					break;
				}
				case 4: {
					let piece = getPiece();

					if (piece.animation === Animation.Walk) {
						break;
					}

					const xMove =
						Math.random() > 0.33 ? Math.floor(Math.random() * 3) - 1 : 0;
					const yMove = xMove === 0 ? (Math.random() > 0.5 ? 1 : -1) : 0;
					const x = piece.hero.position.x + xMove;
					const y = piece.hero.position.y + yMove;

					if (x < 0) {
						continue;
					}

					if (x >= this.display.board.w) {
						continue;
					}

					if (y < 0) {
						continue;
					}

					if (y >= this.display.board.h) {
						continue;
					}

					if (
						this.display.pieces.some(
							(p) => p.hero.position.x === x && p.hero.position.y === y,
						)
					) {
						continue;
					}

					piece = {
						...piece,
						hero: {
							...piece.hero,
							position: { ...piece.hero.position, x: x, y: y },
						},
						animation: Animation.Walk,
						animationStartAt: Date.now(),
					};

					yield { ...piece };
					break;
				}
				case 5: {
					let piece = getPiece();
					if (piece.animation === Animation.Hurt) {
						break;
					}

					piece = {
						...piece,
						animation: Animation.Hurt,
						animationStartAt: Date.now(),
						hero: {
							...piece.hero,
							attributes: {
								...piece.hero.attributes,
								health: piece.hero.attributes.health * 0.6,
							},
						},
					};

					yield { ...piece };
					break;
				}
			}
		}
	}

	subscribe(observerOrNext: Partial<Observer<Display>>): Subscription {
		const display$ = new Subject<Display>();
		display$.next(this.display);

		const animateDisplay = async () => {
			while (true) {
				if (this.display.phase === Phase.Combat) {
					for (const iterator of this.pieceIterators) {
						const piece = iterator.next().value;

						this.display = {
							...this.display,
							pieces: this.display.pieces.map((p) => {
								return p.hero.id === piece.hero.id ? piece : p;
							}),
						};
					}
				}

				display$.next(this.display);
				await new Promise((resolve) => setTimeout(resolve, 1000));
			}
		};

		animateDisplay();
		return display$
			.pipe(
				combineLatestWith(interval(100).pipe(startWith(0))),
				map(([display]) => display),
			)
			.subscribe(observerOrNext);
	}
}

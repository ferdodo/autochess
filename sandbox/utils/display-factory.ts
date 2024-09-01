import { Subject, interval, map, combineLatestWith, startWith } from "rxjs";
import { uid } from "uid";
import { Animation } from "core/types/animation";
import { Appellation } from "core/types/appellation";
import type { Display } from "core/types/display";
import type { Piece } from "core/types/piece";
import type { Subscription, Subscribable, Observer } from "rxjs";
import { GUI } from "dat.gui";

interface PieceHandle {
	id: string;
	iterator: IterableIterator<Piece>;
	simulated: boolean;
	startSimulation: () => DisplayFactory;
	stopSimulation: () => DisplayFactory;
	removePiece: () => DisplayFactory;
	gui: GUI;
}

export class DisplayFactory implements Subscribable<Display> {
	display: Display = {
		board: { x: 0, y: 0, w: 10, h: 10 },
		pieces: [],
		bench: {
			0: {
				appellation: Appellation.Soldier,
				grade: 1,
			},
			1: {
				appellation: Appellation.Soldier,
				grade: 1,
			},
			2: {
				appellation: Appellation.Soldier,
				grade: 2,
			},
			3: {
				appellation: Appellation.Orc,
				grade: 3,
			},
			4: {
				appellation: Appellation.Soldier,
				grade: 4,
			},
		},
		shop: [
			{
				id: uid(),
				appellation: Appellation.Soldier,
			},
			{
				id: uid(),
				appellation: Appellation.Orc,
			},
			{
				id: uid(),
				appellation: Appellation.Soldier,
			},
		],
	};

	gui: GUI = new GUI();
	pieceHandles: PieceHandle[] = [];

	constructor() {
		this.gui.add(this, "addPiece");
	}

	get pieceIterators(): IterableIterator<Piece>[] {
		return this.pieceHandles
			.filter((handle) => handle.simulated)
			.map((handle) => handle.iterator);
	}

	addPiece(): DisplayFactory {
		const iterator = this.#addPiece();
		const piece = iterator.next().value;
		this.display.pieces.push(piece);
		const gui = this.gui.addFolder(piece.id);

		const pieceHandle = {
			id: piece.id,
			iterator,
			simulated: true,
			startSimulation: () => {
				pieceHandle.simulated = true;
				return this;
			},
			stopSimulation: () => {
				pieceHandle.simulated = false;

				this.display.pieces = this.display.pieces.map((p) => {
					if (p.id === piece.id) {
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
					(p) => p.id !== piece.id,
				);

				gui.hide();

				this.pieceHandles = this.pieceHandles.filter(
					(handle) => handle.id !== piece.id,
				);

				return this;
			},
			gui,
		};

		gui.add(pieceHandle, "startSimulation");
		gui.add(pieceHandle, "stopSimulation");
		gui.add(pieceHandle, "removePiece");

		this.pieceHandles.push(pieceHandle);
		return this;
	}

	*#addPiece(): IterableIterator<Piece> {
		const id = uid();

		const randomAppellation: Appellation =
			Object.values(Appellation)[
				Math.floor(Math.random() * Object.values(Appellation).length)
			];

		let piece = {
			id,
			hero: {
				appellation: randomAppellation,
				position: {
					x: 0,
					y: 0,
					w: 0,
					h: 0,
				},
				grade: Math.floor(Math.random() * 5) + 1,
			},
			animationStartAt: Date.now(),
			animation: Animation.Idle,
			position: {
				x: Math.floor(Math.random() * this.display.board.w),
				y: Math.floor(Math.random() * this.display.board.w),
				w: 0,
				h: 0,
			},
			attributes: {
				maxHealth: 100,
				health: 100,
				maxMana: 50,
				mana: 50,
			},
			right: Math.random() > 0.5,
		};

		while (true) {
			const action = Math.floor(Math.random() * 6);

			switch (action) {
				case 0:
					if (piece.animation === Animation.Idle) {
						break;
					}

					piece = {
						...piece,
						attributes: {
							...piece.attributes,
							health: piece.attributes.maxHealth,
						},
						animation: Animation.Idle,
						animationStartAt: Date.now(),
					};

					yield { ...piece };
					break;
				case 1:
					if (piece.animation === Animation.Attack) {
						break;
					}
					piece.animation = Animation.Attack;
					piece.animationStartAt = Date.now();
					yield { ...piece };
					break;
				case 2:
					if (piece.animation === Animation.Death) {
						break;
					}

					piece.animation = Animation.Death;
					piece.animationStartAt = Date.now();
					yield { ...piece };
					break;
				case 3:
					if (piece.animation === Animation.Ability) {
						break;
					}

					piece.animation = Animation.Ability;
					piece.animationStartAt = Date.now();
					yield { ...piece };
					break;
				case 4: {
					if (piece.animation === Animation.Walk) {
						break;
					}

					const xMove =
						Math.random() > 0.33 ? Math.floor(Math.random() * 3) - 1 : 0;
					const yMove = xMove === 0 ? (Math.random() > 0.5 ? 1 : -1) : 0;
					const x = piece.position.x + xMove;
					const y = piece.position.y + yMove;

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
							(p) => p.position.x === x && p.position.y === y,
						)
					) {
						continue;
					}

					piece = {
						...piece,
						position: { ...piece.position, x: x, y: y },
						animation: Animation.Walk,
						animationStartAt: Date.now(),
					};

					yield { ...piece };
					break;
				}
				case 5:
					if (piece.animation === Animation.Hurt) {
						break;
					}

					piece = {
						...piece,
						animation: Animation.Hurt,
						animationStartAt: Date.now(),
						attributes: {
							...piece.attributes,
							health: piece.attributes.health * 0.6,
						},
					};

					yield { ...piece };
					break;
			}
		}
	}

	subscribe(observerOrNext: Partial<Observer<Display>>): Subscription {
		const display$ = new Subject<Display>();
		display$.next(this.display);

		const animateDisplay = async () => {
			while (true) {
				for (const iterator of this.pieceIterators) {
					const piece = iterator.next().value;

					this.display = {
						...this.display,
						pieces: this.display.pieces.map((p) => {
							return p.id === piece.id ? piece : p;
						}),
					};
				}

				await new Promise((resolve) => setTimeout(resolve, 1000));
				display$.next(this.display);
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

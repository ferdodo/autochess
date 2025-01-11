import type { Game } from "../types/game.js";
import type { OperatorFunction } from "rxjs";
import { switchMap, distinctUntilKeyChanged } from "rxjs/operators";
import type { Observable } from "rxjs";
import type { Confrontation } from "../types/confrontation.js";
import { Phase } from "../types/phase.js";
import type { PublicKey } from "../types/public-key.js";
import { computeConfrontation } from "./compute-confrontation.js";
import type { Piece } from "../types/piece.js";
import { Animation } from "../types/animation.js";
import { revertPosition } from "./revert-position.js";
import { computeAnimation } from "./compute-animation.js";
import type { Action } from "../types/action.js";
import { isScopeCompatible } from "./is-scope-compatible.js";
import { map, startWith, filter, of } from "rxjs";

export function observePortrayedConfrontation<T>(
	publicKey: PublicKey,
	animationTicker: Observable<T>,
): OperatorFunction<Game, Piece[] | undefined> {
	return (source) => {
		return source.pipe(
			distinctUntilKeyChanged("phase"),
			switchMap((game: Game) => {
				if (game.phase !== Phase.Combat) {
					return of(undefined);
				}

				if (!game.combats) {
					throw new Error("No combat found !");
				}

				const combat = game.combats.find(
					(combat) =>
						combat.playerAPublicKey === publicKey ||
						combat.playerBPublicKey === publicKey,
				);

				if (!combat) {
					throw new Error("No combat found !");
				}

				const actionIterator = combat.actions[Symbol.iterator]();

				let confrontation = {
					playerAHeroes:
						publicKey === combat.playerAPublicKey
							? combat.playerAHeroes
							: combat.playerBHeroes,
					playerBHeroes:
						publicKey === combat.playerAPublicKey
							? combat.playerBHeroes
							: combat.playerAHeroes,
				};

				const portrayedConfrontation: Piece[] = [
					...confrontation.playerAHeroes.map((hero) => ({
						hero,
						animation: Animation.Idle,
						transposed: false,
						animationStartAt: Date.now(),
						right: false,
					})),
					...confrontation.playerBHeroes.map((hero) => ({
						hero: {
							...hero,
							position: revertPosition(hero.position),
						},
						animation: Animation.Idle,
						transposed: false,
						animationStartAt: Date.now(),
						right: true,
					})),
				];

				let item = actionIterator.next();

				return animationTicker.pipe(
					map(() => {
						const actions: Action[] = [];

						if (item.done) {
							return undefined;
						}

						do {
							actions.push(item.value);
							confrontation = computeConfrontation(confrontation, item.value);
							item = actionIterator.next();
						} while (!item.done && isScopeCompatible(actions, item.value));

						return [
							...confrontation.playerAHeroes.map((hero) => ({
								hero,
								animation: computeAnimation(hero, actions),
								transposed: false,
								animationStartAt: Date.now(),
								right: false,
							})),
							...confrontation.playerBHeroes.map((hero) => ({
								hero: {
									...hero,
									position: revertPosition(hero.position),
								},
								animation: computeAnimation(hero, actions),
								transposed: false,
								animationStartAt: Date.now(),
								right: true,
							})),
						];
					}),
					startWith(portrayedConfrontation),
					filter(Boolean),
				);
			}),
		);
	};
}

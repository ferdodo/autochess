import type { Game } from "../types/game.js";
import type { OperatorFunction } from "rxjs";
import { switchMap, distinctUntilKeyChanged } from "rxjs/operators";
import type { Observable } from "rxjs";
import { Phase } from "../types/phase.js";
import type { PublicKey } from "../types/public-key.js";
import { computeConfrontation } from "./compute-confrontation.js";
import type { Piece } from "../types/piece.js";
import type { Action } from "../types/action.js";
import { isScopeCompatible } from "./is-scope-compatible.js";
import { map, startWith, filter, of } from "rxjs";
import { portrayHero } from "./portray-hero.js";

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

				let portrayedConfrontation: Piece[] = [
					...confrontation.playerAHeroes.map((hero) =>
						portrayHero(hero, false),
					),
					...confrontation.playerBHeroes.map((hero) => portrayHero(hero, true)),
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

						const currentPortrayedConfrontation = [
							...confrontation.playerAHeroes.map((hero) => {
								return portrayHero(
									hero,
									false,
									actions,
									portrayedConfrontation,
								);
							}),
							...confrontation.playerBHeroes.map((hero) => {
								return portrayHero(hero, true, actions, portrayedConfrontation);
							}),
						];

						portrayedConfrontation = currentPortrayedConfrontation;
						return currentPortrayedConfrontation;
					}),
					startWith(portrayedConfrontation),
					filter(Boolean),
				);
			}),
		);
	};
}

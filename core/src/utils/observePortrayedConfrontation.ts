import type { OperatorFunction } from "rxjs";
import { switchMap, distinctUntilKeyChanged } from "rxjs/operators";
import type { Observable } from "rxjs";
import { map, startWith, filter, of } from "rxjs";
import type { PublicKey } from "../types/PublicKey.js";
import type { Piece } from "../types/Piece.js";
import type { Game } from "../types/Game.js";
import { Phase } from "../types/Phase.js";
import { portrayHero } from "./portrayHero.js";
import type { Action } from "../types/Action.js";
import { computeConfrontation } from "./computeConfrontation.js";
import { isScopeCompatible } from "./isScopeCompatible.js";

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

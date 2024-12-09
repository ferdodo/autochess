import type { Game } from "../types/game.js";
import type { OperatorFunction } from "rxjs";
import { switchMap, distinctUntilKeyChanged } from "rxjs/operators";
import { Observable } from "rxjs";
import type { Confrontation } from "../types/confrontation.js";
import { Phase } from "../types/phase.js";
import type { PublicKey } from "../types/public-key.js";
import { computeConfrontation } from "./compute-confrontation.js";
import type { Piece } from "../types/piece.js";
import { Animation } from "../types/animation.js";
import { revertPosition } from "./revert-position.js";
import { computeAnimation } from "./compute-animation.js";

export function observePortrayedConfrontation(
	publicKey: PublicKey,
): OperatorFunction<Game, Piece[] | undefined> {
	return (source) => {
		return source.pipe(
			distinctUntilKeyChanged("phase"),
			switchMap((game: Game) => {
				return new Observable<Piece[] | undefined>((subscriber) => {
					if (game.phase !== Phase.Combat) {
						subscriber.next(undefined);
						subscriber.complete();
						return;
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

					subscriber.next(portrayedConfrontation);

					const interval = setInterval(() => {
						const item = actionIterator.next();

						if (item.done) {
							clearInterval(interval);
							subscriber.complete();
							return;
						}

						const action = item.value;
						confrontation = computeConfrontation(confrontation, item.value);

						portrayedConfrontation = [
							...confrontation.playerAHeroes.map((hero) => ({
								hero,
								animation: computeAnimation(hero, [action]),
								transposed: false,
								animationStartAt: Date.now(),
								right: false,
							})),
							...confrontation.playerBHeroes.map((hero) => ({
								hero: {
									...hero,
									position: revertPosition(hero.position),
								},
								animation: computeAnimation(hero, [action]),
								transposed: false,
								animationStartAt: Date.now(),
								right: true,
							})),
						];

						subscriber.next(portrayedConfrontation);
					}, 1000);
				});
			}),
		);
	};
}

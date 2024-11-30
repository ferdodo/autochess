import type { Display } from "core/types/display";
import type { Game } from "core/types/game";
import type { Observable, OperatorFunction } from "rxjs";
import { map, combineLatestWith, startWith } from "rxjs/operators";
import { Animation } from "core/types/animation";
import { interval } from "rxjs";
import { getLevelUpCost } from "core/utils/get-level-up-cost";
import { observePortrayedConfrontation } from "core/utils/observe-portrayed-confrontation";
import type { PublicKey } from "core/types/public-key";
import type { Piece } from "core/types/piece";
import { portrayBench } from "core/utils/portray-bench";
import { trackTransposedHero } from "./track-transposed-hero";
import type { ThreeContext } from "../types/three-context";
import type { HeroId } from "core/types/hero-id";

export function portray(
	publicKey: PublicKey,
	threeContext: ThreeContext,
): OperatorFunction<Game, Display> {
	return (source: Observable<Game>) =>
		source.pipe(
			combineLatestWith(
				source.pipe(observePortrayedConfrontation(publicKey)),
				source.pipe(trackTransposedHero(threeContext, publicKey)),
			),
			map(
				([game, confrontationPieces, transposedHero]: [
					Game,
					Piece[] | undefined,
					HeroId | undefined,
				]) => {
					const display: Display = {
						pieces:
							confrontationPieces ||
							game.playerHeroes[publicKey]?.map((hero) => ({
								hero,
								animation: Animation.Idle,
								transposed: hero.id === transposedHero,
								animationStartAt: Date.now(),
								right: false,
							})) ||
							[],
						players: game.publicKeys.map((p) => ({
							name: game.nicknames[p],
							health: game.playerHealths[p] || 0,
							level: game.playerLevel[p] || 1,
							isMe: p === publicKey,
						})),
						shop: game.playerShops[publicKey] || [],
						bench: portrayBench(
							game.playerBenches[publicKey] || {},
							transposedHero,
						),
						phase: game.phase,
						money: game.playerMoney[publicKey] || 0,
						levelUpCost: getLevelUpCost(game, publicKey),
						phaseStartAt: game.phaseStartAt,
					};

					return display;
				},
			),
			combineLatestWith(interval(100).pipe(startWith(0))),
			map(([display]) => display),
		);
}

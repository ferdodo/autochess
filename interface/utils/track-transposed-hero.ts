import type { Game } from "core/src/types/Game";
import type { OperatorFunction } from "rxjs";
import type { PublicKey } from "core/src/types/PublicKey";
import { map, combineLatestWith, startWith } from "rxjs/operators";
import { observeInteractions } from "./observe-interactions";
import type { ThreeContext } from "../types/three-context";
import { share, scan } from "rxjs";
import type { Interaction } from "core/src/types/Interaction";
import type { HeroId } from "core/src/types/HeroId";
import { Phase } from "core/src/types/Phase";
import { findOwnHeroFromSlot } from "core/src/utils/findOwnHeroFromSlot";

interface ScanValue {
	game: Game;
	interaction: Interaction;
}

interface ScanSeed {
	transposed: HeroId | undefined;
	interaction: Interaction;
}

interface ScanAccumulator {
	transposed: HeroId | undefined;
	game: Game;
	interaction: Interaction;
}

export function trackTransposedHero(
	threeContext: ThreeContext,
	publicKey: PublicKey,
): OperatorFunction<Game, HeroId | undefined> {
	return (source) => {
		return source.pipe(
			combineLatestWith(observeInteractions(threeContext).pipe(startWith({}))),
			map(([game, interaction]: [Game, Interaction]) => ({
				game,
				interaction,
			})),
			scan<ScanValue, ScanAccumulator, ScanSeed>(
				(
					{ interaction: oldInteraction, transposed },
					{ game, interaction },
				) => {
					if (game.phase === Phase.Combat) {
						return { game, interaction, transposed: undefined };
					}

					if (interaction.grabPiece && !oldInteraction.grabPiece) {
						const hero = findOwnHeroFromSlot(
							game,
							interaction.grabPiece,
							publicKey,
						);

						if (hero) {
							return {
								game,
								interaction,
								transposed: hero.id,
							};
						}
					}

					if (interaction.ungrabPiece && !oldInteraction.ungrabPiece) {
						return {
							game,
							interaction,
							transposed: undefined,
						};
					}

					return {
						game,
						interaction,
						transposed,
					};
				},
				{ transposed: undefined, interaction: {} },
			),
			map(({ transposed }) => transposed),
			share(),
		);
	};
}

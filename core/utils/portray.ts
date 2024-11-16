import type { Display } from "../types/display";
import type { Game } from "../types/game";
import type { Observable, OperatorFunction } from "rxjs";
import { map, combineLatestWith, startWith } from "rxjs/operators";
import { Phase } from "../types/phase";
import { Animation } from "../types/animation";
import { interval } from "rxjs";
import { getLevelUpCost } from "./get-level-up-cost";

export function portray(publicKey: string): OperatorFunction<Game, Display> {
	return (source: Observable<Game>) =>
		source.pipe(
			map((game: Game) => {
				const display: Display = {
					pieces:
						game.playerHeroes[publicKey]?.map((hero) => ({
							hero,
							animation: Animation.Idle,
							transposed: false,
							animationStartAt: Date.now(),
							right: false,
						})) || [],
					players: game.publicKeys.map((p) => ({
						name: game.nicknames[p],
						health: game.playerHealths[p] || 0,
						level: game.playerLevel[p] || 1,
						isMe: p === publicKey,
					})),
					shop: game.playerShops[publicKey] || [],
					bench: {},
					phase: Phase.Planning,
					money: game.playerMoney[publicKey] || 0,
					levelUpCost: getLevelUpCost(game, publicKey),
					timeLeft: 30,
				};

				return display;
			}),
			combineLatestWith(interval(100).pipe(startWith(0))),
			map(([display]) => display),
		);
}

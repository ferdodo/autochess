import type { Display } from "../types/display";
import type { Game } from "../types/game";
import type { Observable, OperatorFunction } from "rxjs";
import { map } from "rxjs/operators";
import { Phase } from "../types/phase";

export function portray(publicKey: string): OperatorFunction<Game, Display> {
	return (source: Observable<Game>) =>
		source.pipe(
			map((game: Game) => {
				const display: Display = {
					board: {
						w: 10,
						h: 10,
						x: 0,
						y: 0,
					},
					pieces: [],
					players: game.publicKeys.map((p) => ({
						name: game.nicknames[p],
						health: 100,
						level: 1,
						isMe: p === publicKey,
					})),
					shop: [],
					bench: {},
					phase: Phase.Planning,
					money: 0,
					levelUpCost: 2,
					timeLeft: 30,
				};

				return display;
			}),
		);
}
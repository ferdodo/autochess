import type { Game } from "../types/game";
import type { GameDataMapper } from "../types/game-data-mapper";
import type { Queuer } from "../types/queuer";
import type { QueuerDataMapper } from "../types/queuer-data-mapper";
import { Subject, filter } from "rxjs";

export function createGameAndQueuerDataMapperMock(): [
	GameDataMapper,
	QueuerDataMapper,
] {
	const games: Game[] = [];
	const game$ = new Subject<Game>();
	const currentQueuer$ = new Subject<Queuer[]>();
	let queuers: Queuer[] = [];

	return [
		{
			read: async (playsig: string) =>
				games.find((game) => game.playsig === playsig),
			readAll: async () => [...games],
			createAndRemoveQueuers: async (game: Game) => {
				const queuersPublicKeys = queuers.map((queuer) => queuer.publicKey);

				for (const publicKey of game.publicKeys) {
					if (!queuersPublicKeys.includes(publicKey)) {
						return false;
					}
				}

				if (games.find((g) => g.playsig === game.playsig)) {
					return false;
				}

				queuers = queuers.filter(
					(queuer) =>
						!game.publicKeys.find(
							(publicKey) => publicKey === queuer.publicKey,
						),
				);

				games.push(game);
				game$.next(game);
				currentQueuer$.next(queuers);
				return true;
			},
			observeCreated: () => game$.asObservable(),
			observe: (playsig: string) =>
				game$.pipe(filter((game) => game.playsig === playsig)),
		},
		{
			read: async () => [...queuers],
			save: async (queuer: Queuer) => {
				if (queuers.find((q) => q.publicKey === queuer.publicKey)) {
					return false;
				}

				queuers.push(queuer);
				currentQueuer$.next(queuers);
				return true;
			},
			observe: () => currentQueuer$.asObservable(),
		},
	];
}

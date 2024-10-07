import type { Game } from "../types/game";
import type { GameDataMapper } from "../types/game-data-mapper";
import type { Queuer } from "../types/queuer";
import type { QueuerDataMapper } from "../types/queuer-data-mapper";
import { Subject } from "rxjs";

export function createGameAndQueuerDataMapperMock(): [
	GameDataMapper,
	QueuerDataMapper,
] {
	const games: Game[] = [];
	const createdGame$ = new Subject<Game>();
	const currentQueuer$ = new Subject<Queuer[]>();
	let queuers: Queuer[] = [];

	return [
		{
			createAndRemoveQueuers: async (game: Game) => {
				const queuersPublicKeys = queuers.map((queuer) => queuer.publicKey);

				for (const publicKey of game.publicKeys) {
					if (!queuersPublicKeys.includes(publicKey)) {
						return false;
					}
				}

				if (games.find((g) => g.id === game.id)) {
					return false;
				}

				queuers = queuers.filter(
					(queuer) =>
						!game.publicKeys.find(
							(publicKey) => publicKey === queuer.publicKey,
						),
				);

				games.push(game);
				createdGame$.next(game);
				currentQueuer$.next(queuers);
				return true;
			},
			observeCreated: () => createdGame$.asObservable(),
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

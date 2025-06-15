import type { Observable } from "rxjs";
import type { Pool } from "./Pool.js";
import type { Game } from "./Game.js";
import type { Ranking } from "./Ranking.js";
import type { Encounter } from "./Encounter.js";
import type { Playsig } from "./Playsig.js";
import type { PublicKey } from "./PublicKey.js";
import type { Queuer } from "./Queuer.js";

interface ReadAndUpdatePoolWithGame {
	pool: Pool;
	game: Game;
	commit: (pool: Pool, game: Game) => Promise<boolean>;
	abort: () => Promise<void>;
}

interface ReadAndUpdateGame {
	game: Game;
	commit: (game: Game) => Promise<boolean>;
	abort: () => Promise<void>;
}

interface ReadAndUpsertRankingsAndCreateEncounters {
	rankings: Ranking[];
	commit: (
		newEncounters: Encounter[],
		newRankings: Ranking[],
	) => Promise<boolean>;
	abort: () => Promise<void>;
}

export interface DataMapper {
	readGame(playsig: string): Promise<Game | undefined>;
	updateGame(game: Game): Promise<boolean>;
	readAndUpdateGame(playsig: Playsig): Promise<ReadAndUpdateGame | undefined>;
	createGameWithPoolAndDeleteQueuers(
		game: Game,
		pool: Pool,
		queuersPublicKeys: PublicKey[],
	): Promise<boolean>;
	createdGame$: Observable<Game>;
	observeGame(playsig: string): Observable<Game>;
	readPool(playsig: string): Promise<Pool | undefined>;
	createPool(pool: Pool): Promise<boolean>;
	readAndUpdatePoolWithGame(
		playsig: Playsig,
	): Promise<ReadAndUpdatePoolWithGame | undefined>;
	readQueuers(): Promise<Queuer[]>;
	createQueuer(queuer: Queuer): Promise<boolean>;
	deleteQueuer(publicKey: PublicKey): Promise<boolean>;
	queuers$: Observable<Queuer[]>;
	readAndUpsertRankingsAndCreateEncounters(
		playersPublicKeys: PublicKey[],
	): Promise<ReadAndUpsertRankingsAndCreateEncounters | undefined>;
	readRanking(publicKey: PublicKey): Promise<Ranking>;
}

import type { Game } from "./game.js";
import type { Observable } from "rxjs";
import type { Pool } from "./pool.js";
import type { Queuer } from "./queuer.js";
import type { Playsig } from "./playsig.js";
import type { PublicKey } from "./public-key.js";
import type { Ranking } from "./ranking.js";
import type { Encounter } from "./encounter.js";

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

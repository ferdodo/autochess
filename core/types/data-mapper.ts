import type { Game } from "./game";
import type { Observable } from "rxjs";
import type { Pool } from "./pool";
import type { Queuer } from "./queuer";
import type { Playsig } from "./playsig";
import type { PublicKey } from "./public-key";

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

export interface DataMapper {
	readGame(playsig: string): Promise<Game | undefined>;
	readAllGames(): Promise<Game[]>;
	saveGame(game: Game): Promise<boolean>;
	readAndUpdateGame(playsig: Playsig): Promise<ReadAndUpdateGame | undefined>;
	createGameWithPoolAndDeleteQueuers(
		game: Game,
		pool: Pool,
		queuersPublicKeys: PublicKey[],
	): Promise<boolean>;
	observeCreatedGame(): Observable<Game>;
	observeGame(playsig: string): Observable<Game>;
	readPool(playsig: string): Promise<Pool | undefined>;
	createPool(pool: Pool): Promise<boolean>;
	readAndUpdatePoolWithGame(
		playsig: Playsig,
	): Promise<ReadAndUpdatePoolWithGame | undefined>;
	readQueuers(playsig: string): Promise<Queuer[]>;
	saveQueuer(queuer: Queuer): Promise<boolean>;
	observeQueuers(): Observable<Queuer[]>;
}

import type { Pool } from "./pool";
import type { Playsig } from "./playsig";
import type { Game } from "./game";

interface ReadAndUpdatePoolWithGame {
	pool: Pool;
	game: Game;
	commit: (pool: Pool, game: Game) => Promise<boolean>;
	abort: () => Promise<void>;
}

export interface PoolDataMapper {
	create(pool: Pool): Promise<boolean>;
	readAndUpdateWithGame(
		playsig: Playsig,
	): Promise<ReadAndUpdatePoolWithGame | undefined>;
}

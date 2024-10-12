import type { Game } from "./game";
import type { Observable } from "rxjs";

export interface GameDataMapper {
	read(playerId: string): Promise<Game | undefined>;
	readAll(): Promise<Game[]>;
	update(game: Game): Promise<boolean>;
	createAndRemoveQueuers: (game: Game) => Promise<boolean>;
	observeCreated: () => Observable<Game>;
	observe(playsig: string): Observable<Game>;
}

import type { Game } from "./game";
import type { Observable } from "rxjs";

export interface GameDataMapper {
	createAndRemoveQueuers: (game: Game) => Promise<boolean>;
	observeCreated: () => Observable<Game>;
}

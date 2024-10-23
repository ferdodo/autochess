import type { PublicKey } from "./public-key";
import type { CachedGame } from "./cached-game";

export interface GameScoped {
	publicKey: PublicKey;
	cachedGame: CachedGame;
}

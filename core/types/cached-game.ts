import type { Game } from "./game";
import type { Signature } from "./signature";
import type { DateTime } from "./date-time";
import type { PublicKey } from "./public-key";

export interface CachedGame {
	game: Game;
	signature: Signature;
	issuedAt: DateTime;
	expiresAt: DateTime;
	publicKey: PublicKey;
}

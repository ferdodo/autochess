import type { Game } from "./game";
import type { DateTime } from "./date-time";
import type { PublicKey } from "./public-key";
import type { Signature } from "./signature";

export interface observeGameBroadcast {
	game: Game;
	publicKey: PublicKey;
	signature: Signature;
	issuedAt: DateTime;
	expiresAt: DateTime;
}

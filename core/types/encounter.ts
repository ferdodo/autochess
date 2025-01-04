import type { PublicKey } from "./public-key.js";
import type { Playsig } from "./playsig.js";
import type { DateTime } from "./date-time.js";

export interface Encounter {
	playsig: Playsig;
	winnerPublicKey: PublicKey;
	loserPublicKey: PublicKey;
	createdAt: DateTime;
}

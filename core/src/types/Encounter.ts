import type { PublicKey } from "./PublicKey.js";
import type { Playsig } from "./Playsig.js";
import type { DateTime } from "./DateTime.js";

export interface Encounter {
	playsig: Playsig;
	winnerPublicKey: PublicKey;
	loserPublicKey: PublicKey;
	createdAt: DateTime;
}

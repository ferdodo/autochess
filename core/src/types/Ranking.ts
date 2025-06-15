import type { PublicKey } from "./PublicKey.js";

export interface Ranking {
	publicKey: PublicKey;
	elo: number;
}

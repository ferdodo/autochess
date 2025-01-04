import type { PublicKey } from "./public-key.js";

export interface Ranking {
	publicKey: PublicKey;
	elo: number;
}

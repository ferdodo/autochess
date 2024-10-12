import type { PublicKey } from "./public-key";
import type { Playsig } from "./playsig";

export interface GameScoped {
	publicKey: PublicKey;
	playsig: Playsig;
}

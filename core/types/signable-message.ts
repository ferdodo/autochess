import type { PublicKey } from "./public-key";

export interface SignableMessage {
	publicKey: PublicKey;
}

import type { DateTime } from "./DateTime.js";
import type { Nickname } from "./Nickname.js";
import type { PublicKey } from "./PublicKey.js";
import type { Signature } from "./Signature.js";

export interface InitiateGameRequest {
	nickname: Nickname;
	publicKey: PublicKey;
	signature: Signature;
	issuedAt: DateTime;
	expiresAt: DateTime;
}

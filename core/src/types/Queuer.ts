import type { PublicKey } from "./PublicKey.js";
import type { Nickname } from "./Nickname.js";
import type { DateTime } from "./DateTime.js";

export interface Queuer {
	publicKey: PublicKey;
	nickname: Nickname;
	createdAt: DateTime;
}

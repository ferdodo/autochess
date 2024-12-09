import type { PublicKey } from "./public-key.js";
import type { Nickname } from "./nickname.js";
import type { DateTime } from "./date-time.js";

export interface Queuer {
	publicKey: PublicKey;
	nickname: Nickname;
	createdAt: DateTime;
}

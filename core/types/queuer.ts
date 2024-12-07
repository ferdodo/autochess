import type { PublicKey } from "./public-key";
import type { Nickname } from "./nickname";
import type { DateTime } from "./date-time";

export interface Queuer {
	publicKey: PublicKey;
	nickname: Nickname;
	createdAt: DateTime;
}

import type { Nickname } from "./nickname";
import { nicknameSchema } from "./nickname";
import type { PublicKey } from "./public-key";
import { publicKeySchema } from "./public-key";
import type { Signature } from "./signature";
import { signatureSchema } from "./signature";
import type { Timestamp } from "./timestamp";
import { timestampSchema } from "./timestamp";

export interface InitiateGameRequest {
	nickname: Nickname;
	publicKey: PublicKey;
	signature: Signature;
	timestamp: Timestamp;
}

export const initiateGameRequestSchema = {
	type: "object",
	required: ["nickname", "publicKey", "signature", "timestamp"],
	properties: {
		nickname: nicknameSchema,
		publicKey: publicKeySchema,
		signature: signatureSchema,
		timestamp: timestampSchema,
	},
	additionalProperties: false,
} as const;

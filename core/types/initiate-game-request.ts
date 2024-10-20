import type { Nickname } from "./nickname";
import { nicknameSchema } from "./nickname";
import type { PublicKey } from "./public-key";
import { publicKeySchema } from "./public-key";
import type { Signature } from "./signature";
import { signatureSchema } from "./signature";
import { dateTimeSchema } from "./date-time";
import type { DateTime } from "./date-time";

export interface InitiateGameRequest {
	nickname: Nickname;
	publicKey: PublicKey;
	signature: Signature;
	issuedAt: DateTime;
	expiresAt: DateTime;
}

export const initiateGameRequestSchema = {
	type: "object",
	required: ["nickname", "publicKey", "signature", "issuedAt", "expiresAt"],
	properties: {
		nickname: nicknameSchema,
		publicKey: publicKeySchema,
		signature: signatureSchema,
		issuedAt: dateTimeSchema,
		expiresAt: dateTimeSchema,
	},
	additionalProperties: false,
} as const;

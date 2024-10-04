import type { Nickname } from "./nickname";
import { nicknameSchema } from "./nickname";
import type { PublicKey } from "./public-key";
import { publicKeySchema } from "./public-key";

export interface InitiateGameRequest {
	nickname: Nickname;
	publicKey: PublicKey;
}

export const initiateGameRequestSchema = {
	type: "object",
	required: ["nickname", "publicKey"],
	properties: {
		nickname: nicknameSchema,
		publicKey: publicKeySchema,
	},
	additionalProperties: false,
} as const;

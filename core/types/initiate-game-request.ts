import type { Nickname } from "./nickname";
import { nicknameSchema } from "./nickname";
import type { PublicKey } from "./public-key";
import { publicKeySchema } from "./public-key";
import type { Signature } from "./signature";
import { signatureSchema } from "./signature";
import { dateTimeSchema } from "./date-time";
import type { DateTime } from "./date-time";
import type { FromSchema } from "json-schema-to-ts";
import type { JsonSchemaRecommended } from "json-schema-policies";

export interface InitiateGameRequest {
	nickname: Nickname;
	publicKey: PublicKey;
	signature: Signature;
	issuedAt: DateTime;
	expiresAt: DateTime;
}

export const initiateGameRequestSchema = {
	type: "object",
	title: "Initiate game request",
	description: "Payload to initiate a new game.",
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

const a: InitiateGameRequest = {} as FromSchema<
	typeof initiateGameRequestSchema
>;

const b: FromSchema<typeof initiateGameRequestSchema> =
	{} as InitiateGameRequest;

const c: JsonSchemaRecommended = initiateGameRequestSchema;

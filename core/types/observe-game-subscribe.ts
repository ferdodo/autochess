import { dateTimeSchema } from "./date-time.js";
import { playsigSchema } from "./playsig.js";
import { publicKeySchema } from "./public-key.js";
import { signatureSchema } from "./signature.js";
import type { DateTime } from "./date-time.js";
import type { Playsig } from "./playsig.js";
import type { PublicKey } from "./public-key.js";
import type { Signature } from "./signature.js";
import type { FromSchema } from "json-schema-to-ts";
import type { JsonSchemaRecommended } from "json-schema-policies";

export interface ObserveGameSubscribe {
	playsig: Playsig;
	publicKey: PublicKey;
	signature: Signature;
	issuedAt: DateTime;
	expiresAt: DateTime;
}

export const ObserveGameSubscribeSchema = {
	type: "object",
	title: "ObserveGameSubscribe",
	description:
		"Payload to be sent to subscribe to a game. " +
		"Game shall be broadcasted uppon subscribe.",
	required: ["playsig", "issuedAt", "expiresAt", "publicKey", "signature"],
	properties: {
		playsig: playsigSchema,
		publicKey: publicKeySchema,
		signature: signatureSchema,
		issuedAt: dateTimeSchema,
		expiresAt: dateTimeSchema,
	},
	additionalProperties: false,
} as const;

const a: ObserveGameSubscribe = {} as FromSchema<
	typeof ObserveGameSubscribeSchema
>;

const b: FromSchema<typeof ObserveGameSubscribeSchema> =
	{} as ObserveGameSubscribe;

const c: JsonSchemaRecommended = ObserveGameSubscribeSchema;

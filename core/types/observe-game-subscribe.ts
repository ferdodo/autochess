import { dateTimeSchema } from "./date-time";
import { playsigSchema } from "./playsig";
import { publicKeySchema } from "./public-key";
import { signatureSchema } from "./signature";
import type { DateTime } from "./date-time";
import type { Playsig } from "./playsig";
import type { PublicKey } from "./public-key";
import type { Signature } from "./signature";
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

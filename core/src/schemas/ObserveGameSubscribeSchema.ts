import { createRecommendedSchema } from "json-schema-policies";
import { playsigSchema } from "./playsigSchema.js";
import { publicKeySchema } from "./publicKeySchema.js";
import { signatureSchema } from "./signatureSchema.js";
import { dateTimeSchema } from "./dateTimeSchema.js";

export const ObserveGameSubscribeSchema = createRecommendedSchema({
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
} as const);

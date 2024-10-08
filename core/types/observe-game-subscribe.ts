import { playsigSchema } from "./playsig";
import { publicKeySchema } from "./public-key";
import { signatureSchema } from "./signature";
import { timestampSchema } from "./timestamp";

export interface ObserveGameSubscribe {
	playsig: string;
	timestamp: number;
	publicKey: string;
	signature: string;
}

export const ObserveGameSubscribeSchema = {
	type: "object",
	required: ["playsig", "timestamp", "publicKey", "signature"],
	properties: {
		playsig: playsigSchema,
		timestamp: timestampSchema,
		publicKey: publicKeySchema,
		signature: signatureSchema,
	},
	additionalProperties: false,
} as const;

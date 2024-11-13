import { gameSchema, type Game } from "./game";
import { signatureSchema, type Signature } from "./signature";
import { dateTimeSchema, type DateTime } from "./date-time";
import { publicKeySchema, type PublicKey } from "./public-key";
import type { FromSchema } from "json-schema-to-ts";

export interface CachedGame {
	game: Game;
	signature: Signature;
	issuedAt: DateTime;
	expiresAt: DateTime;
	publicKey: PublicKey;
}

export const cachedGameSchema = {
	type: "object",
	title: "Cached Game",
	description: "Game, signed by the backend.",
	properties: {
		game: gameSchema,
		signature: signatureSchema,
		issuedAt: dateTimeSchema,
		expiresAt: dateTimeSchema,
		publicKey: publicKeySchema,
	},
	required: ["game", "signature", "issuedAt", "expiresAt", "publicKey"],
	additionalProperties: false,
} as const;

const a: CachedGame = {} as FromSchema<typeof cachedGameSchema>;
const b: FromSchema<typeof cachedGameSchema> = {} as CachedGame;

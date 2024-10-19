import type { InitiateGameRequest } from "./initiate-game-request";
import { initiateGameRequestSchema } from "./initiate-game-request";
import { LevelUpRequestSchema, type LevelUpRequest } from "./level-up-request";
import { ObserveGameSubscribeSchema } from "./observe-game-subscribe";
import type { ObserveGameSubscribe } from "./observe-game-subscribe";
import { rerollRequestSchema } from "./reroll-request";
import type { RerollRequest } from "./reroll-request";
import { transposeRequestSchema } from "./transpose-request";
import type { TransposeRequest } from "./transpose-request";

export interface ClientMessage {
	initiateGameRequest?: InitiateGameRequest;
	observeGameSubscribe?: ObserveGameSubscribe;
	rerollRequest?: RerollRequest;
	levelUpRequest?: LevelUpRequest;
	transposeRequest?: TransposeRequest;
}

export const clientMessageSchema = {
	type: "object",
	properties: {
		initiateGameRequest: initiateGameRequestSchema,
		observeGameSubscribe: ObserveGameSubscribeSchema,
		rerollRequest: rerollRequestSchema,
		levelUpRequest: LevelUpRequestSchema,
		transposeRequest: transposeRequestSchema,
	},
	additionalProperties: false,
} as const;

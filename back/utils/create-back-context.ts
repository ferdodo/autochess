import type { BackContext } from "core/types/back-context";
import { createWsServer } from "./create-ws-server";
import { debounceTime } from "rxjs";
import { createDataMapper } from "./create-data-mapper";
import type { MikroORM } from "@mikro-orm/core";
import type { Db } from "mongodb";
import { createRoundTimer } from "core/utils/create-round-timer";

export function createBackContext(orm: MikroORM, db: Db): BackContext {
	return {
		connections$: createWsServer(),
		isValidSignature: () => Promise.resolve(true),
		serverPublicKey:
			"ddddddddddcccccccccccccccccccccccccccccccccccccccccccccccccccccccc",
		signMessage: async (message) => ({
			...message,
			publicKey:
				"cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc",
			signature: "ccccccccccc",
			issuedAt: new Date().toISOString(),
			expiresAt: new Date(Date.now() + 60000).toISOString(),
		}),
		lateMatchmakingTimer: (source) => source.pipe(debounceTime(10000)),
		roundTimer: createRoundTimer(),
		dataMapper: createDataMapper(orm, db),
		queuerConnections: {},
	};
}

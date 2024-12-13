import type { BackContext } from "core/types/back-context";
import { createWsServer } from "./create-ws-server.js";
import { debounceTime } from "rxjs";
import { createDataMapper } from "./create-data-mapper.js";
import type { MikroORM } from "@mikro-orm/core";
import type { Db } from "mongodb";
import { createRoundTimer } from "core/utils/create-round-timer";
import { sign } from "./sign.js";

export function createBackContext(orm: MikroORM, db: Db): BackContext {
	const serverPublicKey =
		"ddddddddddcccccccccccccccccccccccccccccccccccccccccccccccccccccccc";

	return {
		connections$: createWsServer(),
		isValidSignature: () => Promise.resolve(true),
		serverPublicKey,
		signMessage: (message) => sign(serverPublicKey, "privateKey", message),
		lateMatchmakingTimer: (source) => source.pipe(debounceTime(10000)),
		roundTimer: createRoundTimer(),
		dataMapper: createDataMapper(orm, db),
		queuerConnections: {},
	};
}

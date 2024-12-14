import type { BackContext } from "core/types/back-context";
import { createWsServer } from "./create-ws-server.js";
import { debounceTime } from "rxjs";
import { createDataMapper } from "./create-data-mapper.js";
import type { MikroORM } from "@mikro-orm/core";
import type { Db } from "mongodb";
import { createRoundTimer } from "core/utils/create-round-timer";
import { sign } from "./sign.js";
import { createKeyPair } from "./create-key-pair.js";
import { verify } from "./verify.js";

export async function createBackContext(
	orm: MikroORM,
	db: Db,
): Promise<BackContext> {
	const [serverPublicKey, serverPrivateKey] = await createKeyPair();

	return {
		connections$: createWsServer(),
		isValidSignature: (signed) => verify(signed),
		serverPublicKey,
		signMessage: (message) => sign(serverPublicKey, serverPrivateKey, message),
		lateMatchmakingTimer: (source) => source.pipe(debounceTime(10000)),
		roundTimer: createRoundTimer(),
		dataMapper: createDataMapper(orm, db),
		queuerConnections: {},
	};
}

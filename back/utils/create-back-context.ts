import type { BackContext } from "core/types/back-context.js";
import { createWsServer } from "./create-ws-server.js";
import { debounceTime } from "rxjs";
import { createDataMapper } from "./create-data-mapper.js";
import { createRoundTimer } from "core/utils/create-round-timer.js";
import { sign } from "./sign.js";
import { createKeyPair } from "./create-key-pair.js";
import { verify } from "./verify.js";
import type { RedisClientType } from "redis";

export async function createBackContext(
	redis: RedisClientType,
): Promise<BackContext> {
	const [serverPublicKey, serverPrivateKey] = await createKeyPair();

	return {
		connections$: createWsServer(),
		isValidSignature: (signed) => verify(signed),
		serverPublicKey,
		signMessage: (message) => sign(serverPublicKey, serverPrivateKey, message),
		lateMatchmakingTimer: (source) => source.pipe(debounceTime(3000)),
		roundTimer: createRoundTimer(),
		dataMapper: createDataMapper(redis),
		queuerConnections: {},
	};
}

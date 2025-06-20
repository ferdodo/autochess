import type { BackContext } from "core/src/types/BackContext.js";
import { createWsServer } from "./create-ws-server.js";
import { debounceTime } from "rxjs";
import { createRoundTimer } from "core/src/utils/createRoundTimer.js";
import { sign } from "./sign.js";
import { createKeyPair } from "./create-key-pair.js";
import { verify } from "./verify.js";
import type { DataMapper } from "core/src/types/DataMapper.js";
import { throttleMessageByPublicKey } from "core/src/utils/throttleMessageByPublicKey.js";
import type { Metrics } from "core/src/types/Metrics.js";

export async function createBackContext(
	dataMapper: DataMapper,
	metrics: Metrics,
): Promise<BackContext> {
	const [serverPublicKey, serverPrivateKey] = await createKeyPair();
	const messageThrottler = throttleMessageByPublicKey(350, 5);

	return {
		connections$: createWsServer(messageThrottler),
		isValidSignature: (signed) => verify(signed),
		serverPublicKey,
		signMessage: (message) => sign(serverPublicKey, serverPrivateKey, message),
		lateMatchmakingTimer: (source) => source.pipe(debounceTime(5000)),
		roundTimer: createRoundTimer(),
		dataMapper,
		queuerConnections: {},
		testingTimeOffset: 0,
		metrics,
	};
}

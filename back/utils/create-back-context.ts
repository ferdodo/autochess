import type { BackContext } from "core/types/back-context.js";
import { createWsServer } from "./create-ws-server.js";
import { debounceTime } from "rxjs";
import { createRoundTimer } from "core/utils/create-round-timer.js";
import { sign } from "./sign.js";
import { createKeyPair } from "./create-key-pair.js";
import { verify } from "./verify.js";
import type { DataMapper } from "core/types/data-mapper.js";

export async function createBackContext(
	dataMapper: DataMapper,
): Promise<BackContext> {
	const [serverPublicKey, serverPrivateKey] = await createKeyPair();

	return {
		connections$: createWsServer(),
		isValidSignature: (signed) => verify(signed),
		serverPublicKey,
		signMessage: (message) => sign(serverPublicKey, serverPrivateKey, message),
		lateMatchmakingTimer: (source) => source.pipe(debounceTime(5000)),
		roundTimer: createRoundTimer(),
		dataMapper,
		queuerConnections: {},
		testingTimeOffset: 0,
	};
}

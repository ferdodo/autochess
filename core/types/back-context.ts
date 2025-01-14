import type { Observable } from "rxjs";
import type { Connection } from "./connection.js";
import type { ClientMessage } from "./client-message.js";
import type { ServerMessage } from "./server-message.js";
import type { Signed } from "./signed.js";
import type { DataMapper } from "./data-mapper.js";
import type { SignedMessage } from "./signed-message.js";
import type { MonoTypeOperatorFunction } from "rxjs";
import type { Queuer } from "./queuer.js";
import type { Game } from "./game.js";
import type { PublicKey } from "./public-key.js";

export interface BackContext {
	connections$: Observable<Connection<ClientMessage, ServerMessage>>;
	isValidSignature: <T>(message: T & Signed) => Promise<boolean>;
	signMessage: <T>(message: T) => Promise<SignedMessage & T>;
	serverPublicKey: PublicKey;
	dataMapper: DataMapper;
	lateMatchmakingTimer: MonoTypeOperatorFunction<Queuer[]>;
	roundTimer: MonoTypeOperatorFunction<Game>;
	queuerConnections: Record<string, Connection<ClientMessage, ServerMessage>>;
	testingTimeOffset: number;
}

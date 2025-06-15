import type { Observable } from "rxjs";
import type { Connection } from "./Connection.js";
import type { ClientMessage } from "./ClientMessage.js";
import type { ServerMessage } from "./ServerMessage.js";
import type { Signed } from "./Signed.js";
import type { DataMapper } from "./DataMapper.js";
import type { SignedMessage } from "./SignedMessage.js";
import type { MonoTypeOperatorFunction } from "rxjs";
import type { Queuer } from "./Queuer.js";
import type { Game } from "./Game.js";
import type { PublicKey } from "./PublicKey.js";
import type { Metrics } from "./Metrics.js";

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
	metrics: Metrics;
}

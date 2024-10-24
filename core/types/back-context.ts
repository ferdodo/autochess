import type { Observable } from "rxjs";
import type { Connection } from "./connection";
import type { ClientMessage } from "./client-message";
import type { ServerMessage } from "./server-message";
import type { Signed } from "./signed";
import type { DataMapper } from "./data-mapper";
import type { SignedMessage } from "./signed-message";
import type { MonoTypeOperatorFunction } from "rxjs";
import type { Queuer } from "./queuer";

export interface BackContext {
	connections$: Observable<Connection<ClientMessage, ServerMessage>>;
	isValidSignature: <T>(message: T & Signed) => Promise<boolean>;
	signMessage: <T>(message: T) => Promise<SignedMessage & T>;
	dataMapper: DataMapper;
	lateMatchmakingTimer: MonoTypeOperatorFunction<Queuer[]>;
	roundTimer: Observable<void>;
	queuerConnections: Record<string, Connection<ClientMessage, ServerMessage>>;
}

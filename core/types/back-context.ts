import type { Observable } from "rxjs";
import type { Connection } from "./connection";
import type { ClientMessage } from "./client-message";
import type { ServerMessage } from "./server-message";
import type { Signed } from "./signed";
import type { DataMapper } from "./data-mapper";
import type { SignedMessage } from "./signed-message";
import type { MonoTypeOperatorFunction } from "rxjs";
import type { Queuer } from "./queuer";
import type { Game } from "./game";
import type { PublicKey } from "./public-key";

export interface BackContext {
	connections$: Observable<Connection<ClientMessage, ServerMessage>>;
	isValidSignature: <T>(message: T & Signed) => Promise<boolean>;
	signMessage: <T>(message: T) => Promise<SignedMessage & T>;
	serverPublicKey: PublicKey;
	dataMapper: DataMapper;
	lateMatchmakingTimer: MonoTypeOperatorFunction<Queuer[]>;
	roundTimer: MonoTypeOperatorFunction<Game>;
	queuerConnections: Record<string, Connection<ClientMessage, ServerMessage>>;
}

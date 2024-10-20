import type { Observable } from "rxjs";
import type { Connection } from "./connection";
import type { ClientMessage } from "./client-message";
import type { ServerMessage } from "./server-message";
import type { Signed } from "./signed";
import type { DataMapper } from "./data-mapper";
import type { SignableMessage } from "./signable-message";
import type { SignedMessage } from "./signed-message";

interface BackContextConfig {
	skipMatchMakeDebounce: boolean;
}

export interface BackContext {
	connections$: Observable<Connection<ClientMessage, ServerMessage>>;
	isValidSignature: <T>(message: T & Signed) => Promise<boolean>;
	signMessage: <T>(message: SignableMessage & T) => Promise<SignedMessage & T>;
	dataMapper: DataMapper;
	queuerConnections: Record<string, Connection<ClientMessage, ServerMessage>>;
	config: BackContextConfig;
}

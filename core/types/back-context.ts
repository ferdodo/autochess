import type { Observable } from "rxjs";
import type { Connection } from "./connection";
import type { ClientMessage } from "./client-message";
import type { GameDataMapper } from "./game-data-mapper";
import type { QueuerDataMapper } from "./queuer-data-mapper";
import type { ServerMessage } from "./server-message";
import type { Signed } from "./signed";

export interface BackContext {
	connections$: Observable<Connection<ClientMessage, ServerMessage>>;
	isValidSignature: <T>(message: T & Signed) => Promise<boolean>;
	gameDataMapper: GameDataMapper;
	queuerDataMapper: QueuerDataMapper;
	queuerConnections: Record<string, Connection<ClientMessage, ServerMessage>>;
	skipMatchMakeDebounce: boolean;
}

import type { Observable } from "rxjs";
import type { Connection } from "./connection";
import type { ClientMessage } from "./client-message";
import type { GameDataMapper } from "./game-data-mapper";
import type { QueuerDataMapper } from "./queuer-data-mapper";
import type { ServerMessage } from "./server-message";

export interface BackContext {
	connections$: Observable<Connection<ClientMessage, ServerMessage>>;
	isInvalidSignature: (message: ClientMessage) => boolean;
	gameDataMapper: GameDataMapper;
	queuerDataMapper: QueuerDataMapper;
	queuerConnections: Record<string, Connection<ClientMessage, ServerMessage>>;
}

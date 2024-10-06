import type { ClientMessage } from "./client-message";
import type { ServerMessage } from "./server-message";
import type { Connection } from "./connection";

interface SignableMessage {
	publicKey: string;
}

interface SignedMessage {
	publicKey: string;
	timestamp: number;
	signature: string;
}

export interface FrontContext {
	connection: Connection<ServerMessage, ClientMessage>;
	publicKey: string;
	nickname: string;
	signMessage: <T>(message: SignableMessage & T) => Promise<SignedMessage & T>;
}

import type { ClientMessage } from "./client-message.js";
import type { ServerMessage } from "./server-message.js";
import type { Connection } from "./connection.js";
import type { PublicKey } from "./public-key.js";
import type { Playsig } from "./playsig.js";
import type { SignedMessage } from "./signed-message.js";
import type { Stamp } from "./stamp.js";

export interface FrontContext {
	connection: Connection<ServerMessage, ClientMessage>;
	publicKey: PublicKey;
	nickname: string;
	playsig?: Playsig;
	stamp?: Stamp;
	signMessage: <T>(message: T) => Promise<SignedMessage & T>;
}

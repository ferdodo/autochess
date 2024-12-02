import type { ClientMessage } from "./client-message";
import type { ServerMessage } from "./server-message";
import type { Connection } from "./connection";
import type { PublicKey } from "./public-key";
import type { Playsig } from "./playsig";
import type { SignedMessage } from "./signed-message";
import type { Stamp } from "./stamp";

export interface FrontContext {
	connection: Connection<ServerMessage, ClientMessage>;
	publicKey: PublicKey;
	nickname: string;
	playsig?: Playsig;
	stamp?: Stamp;
	signMessage: <T>(message: T) => Promise<SignedMessage & T>;
}

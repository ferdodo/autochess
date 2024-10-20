import type { ClientMessage } from "./client-message";
import type { ServerMessage } from "./server-message";
import type { Connection } from "./connection";
import type { DateTime } from "./date-time";
import type { PublicKey } from "./public-key";
import type { Signature } from "./signature";
import type { Playsig } from "./playsig";

interface SignableMessage {
	publicKey: PublicKey;
}

interface SignedMessage {
	publicKey: PublicKey;
	issuedAt: DateTime;
	expiresAt: DateTime;
	signature: Signature;
}

export interface FrontContext {
	connection: Connection<ServerMessage, ClientMessage>;
	publicKey: PublicKey;
	nickname: string;
	playsig?: Playsig;
	signMessage: <T>(message: SignableMessage & T) => Promise<SignedMessage & T>;
}

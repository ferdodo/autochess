import type { ClientMessage } from "./ClientMessage.js";
import type { Connection } from "./Connection.js";
import type { Nickname } from "./Nickname.js";
import type { Playsig } from "./Playsig.js";
import type { PublicKey } from "./PublicKey.js";
import type { ServerMessage } from "./ServerMessage.js";
import type { SignedMessage } from "./SignedMessage.js";
import type { Stamp } from "./Stamp.js";

export interface FrontContext {
	connection: Connection<ServerMessage, ClientMessage>;
	publicKey: PublicKey;
	nickname: Nickname;
	playsig?: Playsig;
	stamp?: Stamp;
	signMessage: <T>(message: T) => Promise<SignedMessage & T>;
}

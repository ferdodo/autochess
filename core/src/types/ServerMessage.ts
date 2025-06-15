import type { InitiateGameReponse } from "./InitiateGameReponse.js";
import type { observeGameBroadcast } from "./observeGameBroadcast.js";
import type { ServerNotification } from "./ServerNotification.js";

export interface ServerMessage {
	initiateGameResponse?: InitiateGameReponse;
	observeGameBroadcast?: observeGameBroadcast;
	serverNotification?: ServerNotification;
}

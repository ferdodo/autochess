import type { InitiateGameReponse } from "./initiate-game-response.js";
import type { observeGameBroadcast } from "./observe-game-broadcast.js";
import type { ServerNotification } from "./server-notifications.js";

export interface ServerMessage {
	initiateGameResponse?: InitiateGameReponse;
	observeGameBroadcast?: observeGameBroadcast;
	serverNotification?: ServerNotification;
}

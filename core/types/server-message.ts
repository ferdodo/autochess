import type { InitiateGameReponse } from "./initiate-game-response";
import type { observeGameBroadcast } from "./observe-game-broadcast";

export interface ServerMessage {
	initiateGameResponse?: InitiateGameReponse;
	observeGameBroadcast?: observeGameBroadcast;
}

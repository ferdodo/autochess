import type { InitiateGameRequest } from "./InitiateGameRequest.js";
import type { LevelUpRequest } from "./LevelUpRequest.js";
import type { ObserveGameSubscribe } from "./ObserveGameSubscribe.js";
import type { RerollRequest } from "./RerollRequest.js";
import type { ShopBuyRequest } from "./ShopBuyRequest.js";
import type { TransposeRequest } from "./TransposeRequest.js";

export interface ClientMessage {
	initiateGameRequest?: InitiateGameRequest;
	observeGameSubscribe?: ObserveGameSubscribe;
	rerollRequest?: RerollRequest;
	levelUpRequest?: LevelUpRequest;
	transposeRequest?: TransposeRequest;
	shopBuyRequest?: ShopBuyRequest;
}

import type { Move } from "./Move.js";
import type { Attack } from "./Attack.js";

export interface Action {
	move?: Move;
	attack?: Attack;
}

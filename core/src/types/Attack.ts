import type { HeroId } from "./HeroId.js";

export interface Attack {
	attacker: HeroId;
	target: HeroId;
}

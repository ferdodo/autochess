import type { Trait } from "./Trait.js";

export default interface SynergyDisplay {
	trait: Trait;
	count: number;
	threshold: number;
}

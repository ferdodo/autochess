import type { Pool } from "../types/Pool.js";
import { getRandomAppellation } from "./getRandomAppellation.js";

export function createPool(playsig: string): Pool {
	return {
		heroes: [
			getRandomAppellation(),
			getRandomAppellation(),
			getRandomAppellation(),
			getRandomAppellation(),
			getRandomAppellation(),
			getRandomAppellation(),
			getRandomAppellation(),
			getRandomAppellation(),
			getRandomAppellation(),
			getRandomAppellation(),
			getRandomAppellation(),
			getRandomAppellation(),
			getRandomAppellation(),
			getRandomAppellation(),
			getRandomAppellation(),
			getRandomAppellation(),
			getRandomAppellation(),
			getRandomAppellation(),
			getRandomAppellation(),
			getRandomAppellation(),
			getRandomAppellation(),
			getRandomAppellation(),
			getRandomAppellation(),
			getRandomAppellation(),
			getRandomAppellation(),
			getRandomAppellation(),
		],
		playsig,
	};
}

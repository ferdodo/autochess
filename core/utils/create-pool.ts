import type { Pool } from "../types/pool.js";
import { getRandomAppellation } from "./get-random-appellation.js";

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

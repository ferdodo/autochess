import type { Pool } from "../types/pool";
import { getRandomAppellation } from "./get-random-appellation";

export function createPool(): Pool {
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
		playsig: "",
	};
}

import { Appellation } from "../types/appellation.js";

export function getRandomAppellation(): Appellation {
	return Object.values(Appellation)[
		Math.floor(Math.random() * Object.values(Appellation).length)
	];
}

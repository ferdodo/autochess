import type { BackContext } from "../types/BackContext.js";

export function getDate(backContext: BackContext, offset = 0): Date {
	return new Date(Date.now() + backContext.testingTimeOffset + offset);
}

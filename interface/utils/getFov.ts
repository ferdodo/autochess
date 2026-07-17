import { getWindowRatio } from "./getWindowRatio";

export function getFov(): number {
	const compensationValue =
		Math.max(0, (-getWindowRatio() + 1.6) / 0.055) ** 1.3;
	return 25 + compensationValue;
}

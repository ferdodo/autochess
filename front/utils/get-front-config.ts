import type { FrontConfig } from "../types/front-config";

export function getFrontConfig(): FrontConfig {
	return { rendererRatio: 16 / 9 };
}

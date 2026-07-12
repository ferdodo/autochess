import type { Texture } from "three";
import type { Appellation } from "core/src/types/Appellation";
import type { Animation } from "core/src/types/Animation";
import { textures } from "./textures";

export function loadTexture(
	appellation: Appellation,
	animation: Animation,
): Texture {
	return textures[appellation][animation];
}

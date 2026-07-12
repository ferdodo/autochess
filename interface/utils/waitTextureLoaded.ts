import { textures } from "./textures";

export const waitTextureLoaded: Promise<void> = (async function waitTextureLoad(
	retry = 0,
) {
	if (retry > 20) {
		throw new Error("Textures loading timed out !");
	}

	const textureLoaded = Object.values(textures)
		.flatMap((textureByAnimation) => Object.values(textureByAnimation))
		.every((texture) => Boolean(texture.image));

	if (!textureLoaded) {
		await new Promise((r) => setTimeout(r, 15));
		return waitTextureLoad(retry + 1);
	}
})();

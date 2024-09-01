import SoldierIdleTexture from "assets/Tiny RPG Character Asset Pack v1.03 -Full 20 Characters/Characters(100x100)/Soldier/Soldier/Soldier-Idle.png.base64-data-url";
import SoldierAttackTexture from "assets/Tiny RPG Character Asset Pack v1.03 -Full 20 Characters/Characters(100x100)/Soldier/Soldier/Soldier-Attack01.png.base64-data-url";
import SoldierWalkTexture from "assets/Tiny RPG Character Asset Pack v1.03 -Full 20 Characters/Characters(100x100)/Soldier/Soldier/Soldier-Walk.png.base64-data-url";
import SoldierAbilityTexture from "assets/Tiny RPG Character Asset Pack v1.03 -Full 20 Characters/Characters(100x100)/Soldier/Soldier/Soldier-Attack03.png.base64-data-url";
import SoldierHurtTexture from "assets/Tiny RPG Character Asset Pack v1.03 -Full 20 Characters/Characters(100x100)/Soldier/Soldier/Soldier-Hurt.png.base64-data-url";
import SoldierDeathTexture from "assets/Tiny RPG Character Asset Pack v1.03 -Full 20 Characters/Characters(100x100)/Soldier/Soldier/Soldier-Death.png.base64-data-url";

import OrcIdleTexture from "assets/Tiny RPG Character Asset Pack v1.03 -Full 20 Characters/Characters(100x100)/Orc/Orc/Orc-Idle.png.base64-data-url";
import OrcAttackTexture from "assets/Tiny RPG Character Asset Pack v1.03 -Full 20 Characters/Characters(100x100)/Orc/Orc/Orc-Attack01.png.base64-data-url";
import OrcWalkTexture from "assets/Tiny RPG Character Asset Pack v1.03 -Full 20 Characters/Characters(100x100)/Orc/Orc/Orc-Walk.png.base64-data-url";
import OrcAbilityTexture from "assets/Tiny RPG Character Asset Pack v1.03 -Full 20 Characters/Characters(100x100)/Orc/Orc/Orc-Attack02.png.base64-data-url";
import OrcHurtTexture from "assets/Tiny RPG Character Asset Pack v1.03 -Full 20 Characters/Characters(100x100)/Orc/Orc/Orc-Hurt.png.base64-data-url";
import OrcDeathTexture from "assets/Tiny RPG Character Asset Pack v1.03 -Full 20 Characters/Characters(100x100)/Orc/Orc/Orc-Death.png.base64-data-url";

import { TextureLoader } from "three";
import type { Texture } from "three";
import type { Appellation } from "../types/appellation";
import type { Animation } from "../types/animation";

const textureLoader = new TextureLoader();

const textures: Record<Appellation, Record<Animation, Texture>> = {
	Soldier: {
		Idle: textureLoader.load(SoldierIdleTexture),
		Attack: textureLoader.load(SoldierAttackTexture),
		Walk: textureLoader.load(SoldierWalkTexture),
		Ability: textureLoader.load(SoldierAbilityTexture),
		Hurt: textureLoader.load(SoldierHurtTexture),
		Death: textureLoader.load(SoldierDeathTexture),
	},
	Orc: {
		Idle: textureLoader.load(OrcIdleTexture),
		Attack: textureLoader.load(OrcAttackTexture),
		Walk: textureLoader.load(OrcWalkTexture),
		Ability: textureLoader.load(OrcAbilityTexture),
		Hurt: textureLoader.load(OrcHurtTexture),
		Death: textureLoader.load(OrcDeathTexture),
	},
};

export function loadTexture(
	appellation: Appellation,
	animation: Animation,
): Texture {
	return textures[appellation][animation];
}

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

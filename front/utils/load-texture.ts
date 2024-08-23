import SoldierIdleTexture from "../Tiny RPG Character Asset Pack v1.03 -Full 20 Characters/Characters(100x100)/Soldier/Soldier/Soldier-Idle.png.base64-data-url";
import SoldierAttackTexture from "../Tiny RPG Character Asset Pack v1.03 -Full 20 Characters/Characters(100x100)/Soldier/Soldier/Soldier-Attack01.png.base64-data-url";
import SoldierWalkTexture from "../Tiny RPG Character Asset Pack v1.03 -Full 20 Characters/Characters(100x100)/Soldier/Soldier/Soldier-Walk.png.base64-data-url";
import SoldierAbilityTexture from "../Tiny RPG Character Asset Pack v1.03 -Full 20 Characters/Characters(100x100)/Soldier/Soldier/Soldier-Attack03.png.base64-data-url";
import SoldierHurtTexture from "../Tiny RPG Character Asset Pack v1.03 -Full 20 Characters/Characters(100x100)/Soldier/Soldier/Soldier-Hurt.png.base64-data-url";
import SoldierDeathTexture from "../Tiny RPG Character Asset Pack v1.03 -Full 20 Characters/Characters(100x100)/Soldier/Soldier/Soldier-Death.png.base64-data-url";
import { TextureLoader } from "three";
import type { Texture } from "three";
import type { Appellation } from "core/types/appellation";
import type { Animation } from "core/types/animation";

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
};

export function loadTexture(
	appellation: Appellation,
	animation: Animation,
): Texture {
	return textures[appellation][animation];
}

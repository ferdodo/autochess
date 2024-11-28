import { reroll } from "../api/reroll";
import type { Interaction } from "../types/interaction";
import type { FrontContext } from "../types/front-context";
import { levelUp } from "../api/level-up";
import { shopBuy } from "../api/shop-buy";

export async function cast(
	frontContext: FrontContext,
	interaction: Interaction,
) {
	if (interaction.reroll) {
		await reroll(frontContext);
	}

	if (interaction.levelUp) {
		await levelUp(frontContext);
	}

	if (interaction.shopBuy !== undefined) {
		await shopBuy(frontContext, interaction.shopBuy);
	}
}

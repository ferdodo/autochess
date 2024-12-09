import { reroll } from "../api/reroll.js";
import type { Interaction } from "../types/interaction.js";
import type { FrontContext } from "../types/front-context.js";
import { levelUp } from "../api/level-up.js";
import { shopBuy } from "../api/shop-buy.js";
import { transpose } from "../api/transpose.js";

export async function cast(
	frontContext: FrontContext,
	interactions: Interaction[],
) {
	const interaction = interactions[interactions.length - 1];

	if (interaction.reroll) {
		await reroll(frontContext);
	}

	if (interaction.levelUp) {
		await levelUp(frontContext);
	}

	if (interaction.shopBuy !== undefined) {
		await shopBuy(frontContext, interaction.shopBuy);
	}

	if (interaction.ungrabPiece) {
		const otherInteractions = interactions.slice(0, -1).reverse();

		for (const otherInteraction of otherInteractions) {
			if (otherInteraction.grabPiece) {
				await transpose(
					frontContext,
					otherInteraction.grabPiece,
					interaction.ungrabPiece,
				);
				break;
			}

			if (otherInteraction.ungrabPiece) {
				break;
			}
		}
	}
}

import { reroll } from "../api/reroll";
import type { Interaction } from "../types/interaction";
import type { FrontContext } from "../types/front-context";
import { levelUp } from "../api/level-up";
import { shopBuy } from "../api/shop-buy";
import { transpose } from "../api/transpose";

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

import { reroll } from "../api/reroll.js";
import type { Interaction } from "../types/Interaction.js";
import type { FrontContext } from "../types/FrontContext.js";
import { levelUp } from "../api/levelUp.js";
import { shopBuy } from "../api/shopBuy.js";
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

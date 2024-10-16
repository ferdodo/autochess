import { reroll } from "../api/reroll";
import type { Interaction } from "../types/interaction";
import type { FrontContext } from "../types/front-context";

export async function cast(
	frontContext: FrontContext,
	interaction: Interaction,
) {
	if (interaction.reroll) {
		await reroll(frontContext);
	}
}

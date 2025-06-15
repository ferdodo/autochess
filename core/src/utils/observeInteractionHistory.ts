import type { OperatorFunction } from "rxjs";
import { scan } from "rxjs/operators";
import type { Interaction } from "../types/Interaction.js";

export function observeInteractionHistory(): OperatorFunction<
	Interaction,
	Interaction[]
> {
	return (source) =>
		source.pipe(
			scan((acc, interaction) => {
				return [...acc, interaction].slice(-20);
			}, [] as Interaction[]),
		);
}

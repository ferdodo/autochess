import type { Action } from "../types/action.js";
import { computeScope } from "./compute-scope.js";
import { isBlockGroupPositionEqual } from "blockwise";

export function isScopeCompatible(actions: Action[], action: Action): boolean {
	const scope = computeScope(action);

	for (const previousAction of actions) {
		const previousScope = computeScope(previousAction);

		if (previousScope.heroes.some((hero) => scope.heroes.includes(hero))) {
			return false;
		}
	}

	const positions = actions.flatMap((action) => computeScope(action).positions);

	for (const position of positions) {
		if (isBlockGroupPositionEqual(scope.positions, position)) {
			return false;
		}
	}

	return true;
}

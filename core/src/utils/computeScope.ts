import type { Action } from "../types/Action.js";
import type { Scope } from "../types/Scope.js";

export function computeScope(action: Action): Scope {
	const scope: Scope = {
		heroes: [],
		positions: [],
	};

	if (action.move) {
		scope.heroes.push(action.move.heroId);
		scope.positions.push(action.move.position);
	}

	if (action.attack) {
		scope.heroes.push(action.attack.attacker);
		scope.heroes.push(action.attack.target);
	}

	return scope;
}

import type { Confrontation } from "../types/confrontation.js";
import type { HeroId } from "../types/hero-id.js";
import { findClosestBlock } from "blockwise";
import { isMoveLegal } from "./is-move-legal.js";
import type { Block } from "blockwise";
import { revertPosition } from "./revert-position.js";
import { getHeroAndATeamFromConfrontation } from "./get-hero-and-a-team-from-confrontation.js";

export function moveToClosestHittableHero(
	confrontation: Confrontation,
	heroId: HeroId,
): Block {
	const [hero, isTeamA] = getHeroAndATeamFromConfrontation(
		confrontation,
		heroId,
	);

	const { playerAHeroes, playerBHeroes } = confrontation;
	const enemyList = isTeamA ? playerBHeroes : playerAHeroes;
	const aliveEnemies = enemyList.filter((h) => h.attributes.health > 0);

	const aliveEnemiesPosition = aliveEnemies
		.map((h) => h.position)
		.map(revertPosition);

	if (aliveEnemies.length === 0) {
		return hero.position;
	}

	const closestEnemyBlock = findClosestBlock(
		aliveEnemiesPosition,
		hero.position,
	);

	closestEnemyBlock.x -= 1;

	const possibleMoves = [
		{ ...hero.position, x: hero.position.x - 1 },
		{ ...hero.position, x: hero.position.x + 1 },
		{ ...hero.position, y: hero.position.y - 1 },
		{ ...hero.position, y: hero.position.y + 1 },
	].filter(isMoveLegal(confrontation, hero));

	if (possibleMoves.length === 0) {
		return hero.position;
	}

	return findClosestBlock(possibleMoves, closestEnemyBlock);
}

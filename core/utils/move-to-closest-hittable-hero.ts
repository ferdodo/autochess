import type { Confrontation } from "../types/confrontation";
import type { Hero } from "../types/hero";
import { findClosestBlock } from "blockwise";
import { isMoveLegal } from "./is-move-legal";
import type { Block } from "blockwise";

export function moveToClosestHittableHero(
	confrontation: Confrontation,
	hero: Hero,
): Block {
	const isTeamA = confrontation.playerAHeroes.some((h) => h.id === hero.id);
	const { playerAHeroes, playerBHeroes } = confrontation;
	const enemyList = isTeamA ? playerBHeroes : playerAHeroes;
	const aliveEnemies = enemyList.filter((h) => h.attributes.health > 0);
	const aliveEnemiesPosition = aliveEnemies.map((h) => h.position);

	if (aliveEnemies.length === 0) {
		return hero.position;
	}

	const closestEnemyBlock = findClosestBlock(
		aliveEnemiesPosition,
		hero.position,
	);

	closestEnemyBlock.x += isTeamA ? -1 : 1;

	const possibleMoves = [
		{ ...hero.position, x: hero.position.x - 1 },
		{ ...hero.position, x: hero.position.x + 1 },
		{ ...hero.position, y: hero.position.y - 1 },
		{ ...hero.position, y: hero.position.y + 1 },
	].filter(isMoveLegal(confrontation));

	if (possibleMoves.length === 0) {
		return hero.position;
	}

	return findClosestBlock(possibleMoves, closestEnemyBlock);
}
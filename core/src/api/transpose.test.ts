import { test, expect } from "vitest";
import { withTwoPlayerGameStarted } from "../fixtures/withTwoPlayerGameStarted.js";
import { asPlayerTransposeBoardToBoard } from "../automations/asPlayerTransposeBoardToBoard.js";
import { withOneBoughtHero } from "../fixtures/withOneBoughtHero.js";
import { asPlayerTransposeBenchToBoard } from "../automations/asPlayerTransposeBenchToBoard.js";
import { asPlayerTransposeBoardToBench } from "../automations/asPlayerTransposeBoardToBench.js";
import { asPlayerTransposeBenchToBench } from "../automations/asPlayerTransposeBenchToBench.js";
import { withTwoPiecesOnBoard } from "../fixtures/withTwoPiecesOnBoard.js";
import { getGame } from "../utils/getGame.js";
import { withTwoPlayersInCombat } from "../fixtures/withTwoPlayersInCombat.js";
import { asPlayerShopBuy } from "../automations/asPlayerShopBuy.js";
import { withOneBoughtHeroAndLevelTwo } from "../fixtures/withOneBoughtHeroAndLevelTwo.js";

test("Transpose shall move piece to an empty cell", async () => {
	const testContext = await withTwoPlayerGameStarted();
	await asPlayerTransposeBoardToBoard(testContext);
});

test("Transpose from bench to board", async () => {
	const testContext = await withOneBoughtHeroAndLevelTwo();
	await asPlayerTransposeBenchToBoard(testContext);
	const game = await getGame(testContext);
	const publicKey = testContext.frontContexts[0].publicKey || "Error";
	const bench = game.playerBenches[publicKey];
	const occupied = Object.values(bench).filter(Boolean).length;
	const hero = game.playerHeroes[publicKey][0];
	expect(hero.position.x).toEqual(0);
	expect(hero.position.y).toEqual(0);
	expect(occupied).toEqual(0);
});

test("Transpose from board to bench", async () => {
	const testContext = await withTwoPlayerGameStarted();
	await asPlayerTransposeBoardToBench(testContext);
});

test("Transpose from bench to board on an occupied slot should swap pieces", async () => {
	const testContext = await withOneBoughtHero();
	const initialGame = await getGame(testContext);
	const publicKey = testContext.frontContexts[0].publicKey || "Error";
	const initialHero = initialGame.playerBenches[publicKey][0];

	const gameBefore = await getGame(testContext);

	const totalHeroCountBefore =
		Object.values(gameBefore.playerHeroes[publicKey]).filter(Boolean).length +
		Object.values(gameBefore.playerBenches[publicKey]).filter(Boolean).length;

	await asPlayerTransposeBenchToBoard(testContext, 0, {
		positionX: 0,
		positionY: 0,
	});

	const game = await getGame(testContext);

	const totalHeroCount =
		Object.values(game.playerHeroes[publicKey]).filter(Boolean).length +
		Object.values(game.playerBenches[publicKey]).filter(Boolean).length;

	expect(totalHeroCountBefore).toEqual(totalHeroCount);

	const hero = game.playerBenches[publicKey][0];
	const heroBoard = game.playerHeroes[publicKey][0];
	expect(initialHero).toBeTruthy();
	expect(heroBoard).toBeTruthy();
	expect(hero.id).toBeTruthy();
	expect(hero.id).not.toEqual(initialHero.id);
	expect(heroBoard.id).toEqual(initialHero.id);
	expect(heroBoard.position.x).toEqual(0);
	expect(heroBoard.position.y).toEqual(0);
	await new Promise((resolve) => setTimeout(resolve, 1));
});

test("Transpose from bench to bench", async () => {
	const testContext = await withOneBoughtHero();
	const gameBefore = await getGame(testContext);
	const publicKey = testContext.frontContexts[0].publicKey || "Error";

	const totalHeroCountBefore =
		Object.values(gameBefore.playerHeroes[publicKey]).filter(Boolean).length +
		Object.values(gameBefore.playerBenches[publicKey]).filter(Boolean).length;

	await asPlayerTransposeBenchToBench(testContext);
	const game = await getGame(testContext);

	const totalHeroCount =
		Object.values(gameBefore.playerHeroes[publicKey]).filter(Boolean).length +
		Object.values(gameBefore.playerBenches[publicKey]).filter(Boolean).length;

	expect(totalHeroCountBefore).toEqual(totalHeroCount);
	const bench = game.playerBenches[publicKey];
	const benchSize = Object.values(bench).filter(Boolean).length;
	const benchSlot1 = bench[1];
	expect(benchSize).toEqual(1);
	expect(benchSlot1).toBeTruthy();
	await new Promise((resolve) => setTimeout(resolve, 1));
});

test("Transpose on right side of the board should not work", async () => {
	const testContext = await withOneBoughtHero();
	const initialGame = await getGame(testContext);
	const publicKey = testContext.frontContexts[0].publicKey || "Error";
	const initialHero = initialGame.playerBenches[publicKey][0];

	await asPlayerTransposeBenchToBoard(testContext, 0, {
		positionX: 7,
		positionY: 0,
	});

	const game = await getGame(testContext);
	const hero = game.playerBenches[publicKey][0];
	expect(initialHero).toBeTruthy();
	expect(hero.position.x).toEqual(0);
	expect(hero.position.y).toEqual(0);
	await new Promise((resolve) => setTimeout(resolve, 1));
});

test("Transpose from board to board on an occupied slot should swap pieces", async () => {
	const testContext = await withTwoPiecesOnBoard();
	const initialGame = await getGame(testContext);
	const pubKey = testContext.frontContexts[0].publicKey || "Error";
	const initHero1 = initialGame.playerHeroes[pubKey][0];
	const initHero2 = initialGame.playerHeroes[pubKey][1];
	expect(initHero1).toBeTruthy();
	expect(initHero2).toBeTruthy();

	const gameBefore = await getGame(testContext);

	const totalHeroCountBefore =
		Object.values(gameBefore.playerHeroes[pubKey]).filter(Boolean).length +
		Object.values(gameBefore.playerBenches[pubKey]).filter(Boolean).length;

	await asPlayerTransposeBoardToBoard(testContext);
	const game = await getGame(testContext);

	const totalHeroCount =
		Object.values(game.playerHeroes[pubKey]).filter(Boolean).length +
		Object.values(game.playerBenches[pubKey]).filter(Boolean).length;

	expect(totalHeroCountBefore).toEqual(totalHeroCount);

	const hero1 = game.playerHeroes[pubKey].filter(
		(h) => h.id === initHero1.id,
	)[0];

	const hero2 = game.playerHeroes[pubKey].filter(
		(h) => h.id === initHero2.id,
	)[0];

	expect(hero1).toBeTruthy();
	expect(hero1.position.x).toEqual(initHero2.position.x);
	expect(hero2).toBeTruthy();
	expect(hero1.position.y).toEqual(initHero2.position.y);
	expect(hero2.position.x).toEqual(initHero1.position.x);
	expect(hero2.position.y).toEqual(initHero1.position.y);
	await new Promise((resolve) => setTimeout(resolve, 1));
});

test("Transpose from bench to bench on occupied slot should swap heroes", async () => {
	const testContext = await withOneBoughtHero();
	await asPlayerTransposeBoardToBench(testContext, 0, 1);
	const gameBefore = await getGame(testContext);
	const publicKey = testContext.frontContexts[0].publicKey || "Error";

	const benchHeroesCountBefore = Object.values(
		gameBefore.playerBenches[publicKey],
	).filter(Boolean).length;

	const totalHeroCountBefore =
		Object.values(gameBefore.playerHeroes[publicKey]).filter(Boolean).length +
		benchHeroesCountBefore;

	expect(benchHeroesCountBefore).toEqual(2);
	const firstSlotHeroIdBefore = gameBefore.playerBenches[publicKey][0].id;
	const secondSlotHeroIdBefore = gameBefore.playerBenches[publicKey][1].id;

	await asPlayerTransposeBenchToBench(testContext);
	const game = await getGame(testContext);

	const totalHeroCount =
		Object.values(gameBefore.playerHeroes[publicKey]).filter(Boolean).length +
		Object.values(gameBefore.playerBenches[publicKey]).filter(Boolean).length;

	expect(totalHeroCountBefore).toEqual(totalHeroCount);
	const firstSlotHeroId = game.playerBenches[publicKey][0].id;
	const secondSlotHeroId = game.playerBenches[publicKey][1].id;
	expect(firstSlotHeroId).toEqual(secondSlotHeroIdBefore);
	expect(secondSlotHeroId).toEqual(firstSlotHeroIdBefore);
	await new Promise((resolve) => setTimeout(resolve, 1));
});

test("Transpose should increase transposition metrics", async () => {
	const testContext = await withTwoPiecesOnBoard();
	const metrics = testContext.backContext.metrics;
	expect(metrics.transposeRequestCount).toBeGreaterThan(0);
	expect(metrics.transposeDoneCount).toBeGreaterThan(0);
});

test("Transposition from board to bench in combat phase should have no effect", async () => {
	const testContext = await withTwoPlayersInCombat();
	const game = await getGame(testContext);
	const publicKey = testContext.frontContexts[0].publicKey || "Error";

	const p1Hero = game.playerHeroes[publicKey].find(
		(h) => h.position.x === 0 && h.position.y === 0,
	);

	if (!p1Hero) {
		throw new Error("Hero not found !");
	}

	await asPlayerTransposeBoardToBench(testContext);

	const gameAfter = await getGame(testContext);

	const p1HeroAfter = gameAfter.playerHeroes[publicKey].find(
		(h) => h.position.x === 0 && h.position.y === 0,
	);

	if (!p1HeroAfter) {
		throw new Error("Hero shall not be moved by transposition !");
	}
});

test("Transposition from bench to board in combat phase should have no effect", async () => {
	const testContext = await withTwoPlayersInCombat();
	const publicKey = testContext.frontContexts[0].publicKey || "Error";

	await asPlayerShopBuy(testContext);
	await asPlayerTransposeBenchToBoard(testContext);

	const gameAfter = await getGame(testContext);

	const p1BenchHeroAfter = gameAfter.playerBenches[publicKey][0];

	if (!p1BenchHeroAfter) {
		throw new Error("Hero shall not be moved by transposition !");
	}
});

test("Transposition from board to board in combat phase should have no effect", async () => {
	const testContext = await withTwoPlayersInCombat();
	const publicKey = testContext.frontContexts[0].publicKey || "Error";

	await asPlayerTransposeBoardToBoard(testContext);

	const gameAfter = await getGame(testContext);

	const p1HeroAfter = gameAfter.playerHeroes[publicKey].find(
		(h) => h.position.x === 0 && h.position.y === 0,
	);

	if (!p1HeroAfter) {
		throw new Error("Hero shall not be moved by transposition !");
	}
});

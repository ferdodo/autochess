import { test, expect } from "vitest";
import { withTwoPlayerGameStarted } from "../fixtures/with-two-player-game-started.js";
import { asPlayerTransposeBoardToBoard } from "../automations/as-player-transpose-board-to-board.js";
import { withOneBoughtHero } from "../fixtures/with-one-bought-hero.js";
import { asPlayerTransposeBenchToBoard } from "../automations/as-player-transpose-bench-to-board.js";
import { asPlayerTransposeBoardToBench } from "../automations/as-player-transpose-board-to-bench.js";
import { asPlayerTransposeBenchToBench } from "../automations/as-player-transpose-bench-to-bench.js";
import { withTwoPiecesOnBoard } from "../fixtures/with-two-pieces-on-board.js";
import { getGame } from "../utils/get-game.js";

test("Transpose shall move piece to an empty cell", async () => {
	const testContext = await withTwoPlayerGameStarted();
	await asPlayerTransposeBoardToBoard(testContext);
});

test("Transpose from bench to board", async () => {
	const testContext = await withOneBoughtHero();
	await asPlayerTransposeBenchToBoard(testContext);
	const game = await getGame(testContext);
	const publicKey = testContext.frontContexts[0].publicKey || "Error";
	const bench = game.playerBenches[publicKey];
	const occupied = Object.values(bench).filter(Boolean).length;
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

	await asPlayerTransposeBenchToBoard(testContext, 0, {
		positionX: 0,
		positionY: 0,
	});

	const game = await getGame(testContext);
	const hero = game.playerBenches[publicKey][0];
	expect(initialHero).toBeTruthy();
	expect(hero.id).toBeTruthy();
	expect(hero.id).not.toEqual(initialHero.id);
});

test("Transpose from bench to board", async () => {
	const testContext = await withOneBoughtHero();
	await asPlayerTransposeBenchToBench(testContext);
	const game = await getGame(testContext);
	const publicKey = testContext.frontContexts[0].publicKey || "Error";
	const bench = game.playerBenches[publicKey];
	const benchSize = Object.values(bench).filter(Boolean).length;
	expect(benchSize).toEqual(1);
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
});

test("Transpose from board to board on an occupied slot should swap pieces", async () => {
	const testContext = await withTwoPiecesOnBoard();
	const initialGame = await getGame(testContext);
	const pubKey = testContext.frontContexts[0].publicKey || "Error";
	const initHero1 = initialGame.playerHeroes[pubKey][0];
	const initHero2 = initialGame.playerHeroes[pubKey][1];
	expect(initHero1).toBeTruthy();
	expect(initHero2).toBeTruthy();
	await asPlayerTransposeBoardToBoard(testContext);
	const game = await getGame(testContext);

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
});

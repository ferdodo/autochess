import { test, expect } from "vitest";
import { withTwoPlayerGameStarted } from "../fixtures/with-two-player-game-started.js";
import { asPlayerTransposeBoardToBoard } from "../automations/as-player-transpose-board-to-board.js";
import { withOneBoughtHero } from "../fixtures/with-one-bought-hero.js";
import { asPlayerTransposeBenchToBoard } from "../automations/as-player-transpose-bench-to-board.js";
import { asPlayerTransposeBoardToBench } from "../automations/as-player-transpose-board-to-bench.js";
import { asPlayerTransposeBenchToBench } from "../automations/as-player-transpose-bench-to-bench.js";
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

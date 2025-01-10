import { describe, it, expect, beforeEach } from "vitest";
import { TestScheduler } from "rxjs/testing";
import { createRoundTimer } from "./create-round-timer.js";
import { from } from "rxjs";
import { withTwoPlayerGameStarted } from "../fixtures/with-two-player-game-started.js";
import { getGame } from "./get-game.js";

describe("createRoundTimer", () => {
	let testScheduler: TestScheduler;

	beforeEach(() => {
		testScheduler = new TestScheduler((actual, expected) => {
			expect(actual).toEqual(expected);
		});
	});

	it("It should emit after a timer after every phase change", async () => {
		const testContext = await withTwoPlayerGameStarted();
		const initialGame = await getGame(testContext);

		testScheduler.run(({ expectObservable }) => {
			const source$ = from([initialGame]);
			const expected = "30s (a|)";
			const result$ = source$.pipe(createRoundTimer());
			expectObservable(result$).toBe(expected, { a: initialGame });
		});
	});

	it("Should emit the first value but not re-emit if the phase remains the same", async () => {
		const testContext = await withTwoPlayerGameStarted();
		const initialGame = await getGame(testContext);

		testScheduler.run(({ cold, expectObservable }) => {
			const source$ = cold("a-b", { a: initialGame, b: initialGame });
			const expected = "30s a";
			const result$ = source$.pipe(createRoundTimer());
			expectObservable(result$).toBe(expected, { a: initialGame });
		});
	});
});

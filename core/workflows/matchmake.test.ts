import { test, expect } from "vitest";
import { withTwoPlayerGameStarted } from "../fixtures/with-two-player-game-started.js";
import { observeGame } from "../api/observe-game.js";
import { firstValueFrom } from "rxjs";
import { asNewPlayerConnect } from "../automations/as-new-player-connect.js";
import { asPlayerInitiateGame } from "../automations/as-player-initiate-game.js";
import { withServerStarted } from "../fixtures/with-server-started.js";

test("Should create game with all players nicknames", async () => {
	const testContext = await withTwoPlayerGameStarted();
	const frontContext = testContext.frontContexts[0];

	if (!frontContext) {
		throw new Error("Front context not found !");
	}

	const game = await firstValueFrom(observeGame(frontContext));

	const allNicknames = Object.values(testContext.frontContexts).map(
		(frontContext) => frontContext.nickname,
	);

	expect(Object.values(game.nicknames)).toEqual(allNicknames);
	expect(Object.values(game.nicknames).length).toBeTruthy();
});

test("Should create a game with 8 maximum players", async () => {
	const testContext = withServerStarted();
	asNewPlayerConnect(testContext);
	asNewPlayerConnect(testContext);
	asNewPlayerConnect(testContext);
	asNewPlayerConnect(testContext);
	asNewPlayerConnect(testContext);
	asNewPlayerConnect(testContext);
	asNewPlayerConnect(testContext);
	asNewPlayerConnect(testContext);
	asNewPlayerConnect(testContext);

	await Promise.any([
		asPlayerInitiateGame(testContext, 0),
		asPlayerInitiateGame(testContext, 1),
		asPlayerInitiateGame(testContext, 2),
		asPlayerInitiateGame(testContext, 3),
		asPlayerInitiateGame(testContext, 4),
		asPlayerInitiateGame(testContext, 5),
		asPlayerInitiateGame(testContext, 6),
		asPlayerInitiateGame(testContext, 7),
		asPlayerInitiateGame(testContext, 8),
		new Promise(() =>
			setTimeout(() => {
				testContext.skipMatchmakeLateDebounce();
			}, 1),
		),
	]);

	const frontContext = Object.values(testContext.frontContexts).filter(
		(f) => f.playsig,
	)[0];

	if (!frontContext) {
		throw new Error("Front context not found !");
	}

	const game = await firstValueFrom(observeGame(frontContext));

	expect(Object.values(game.nicknames).length).toBe(8);
});

test("Should not start a game with 1 player", async () => {
	const testContext = withServerStarted();
	asNewPlayerConnect(testContext);

	await expect(
		() =>
			new Promise((resolve, reject) => {
				setTimeout(() => {
					reject(new Error("Good error"));
				}, 5);

				asPlayerInitiateGame(testContext, 0).then(() => resolve(undefined));

				setTimeout(() => {
					testContext.skipMatchmakeLateDebounce();
				}, 1);
			}),
	).rejects.toThrow("Good error");
});

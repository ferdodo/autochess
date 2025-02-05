import { expect, test } from "vitest";
import { getGame } from "../utils/get-game.js";
import { withTwoPlayersInCombat } from "../fixtures/with-two-players-in-combat.js";
import { firstValueFrom, of, filter, from } from "rxjs";
import { observePortrayedConfrontation } from "./observe-portrayed-confrontation.js";
import { Animation } from "../types/animation.js";
import { portrayHero } from "./portray-hero.js";
import { HeroFactory } from "./hero-factory.js";
import type { Piece } from "../types/piece.js";

test("Initial animation should be idle", async () => {
	const testContext = await withTwoPlayersInCombat();
	const game = await getGame(testContext);
	const publicKey = testContext.frontContexts[0].publicKey || "Error";

	const portrayed = await firstValueFrom(
		of(game).pipe(observePortrayedConfrontation(publicKey, of(undefined))),
	);

	if (!portrayed) {
		throw new Error("No value !");
	}

	expect(portrayed.length).toEqual(2);
	expect(portrayed[0].transposed).toEqual(false);
	expect(portrayed[1].transposed).toEqual(false);
	expect(portrayed[0].right).toEqual(false);
	expect(portrayed[1].right).toEqual(true);
	expect(portrayed[0].animation).toEqual(Animation.Idle);
	expect(portrayed[1].animation).toEqual(Animation.Idle);
	expect(portrayed[0].animationStartAt).toBeGreaterThan(0);
	expect(portrayed[1].animationStartAt).toBeGreaterThan(0);
	expect(portrayed[0].hero.position.x).toEqual(0);
	expect(portrayed[0].hero.position.y).toEqual(0);
	expect(portrayed[1].hero.position.x).toEqual(9);
	expect(portrayed[1].hero.position.y).toEqual(9);
	await new Promise((resolve) => setTimeout(resolve, 1));
});

test("Second animation should be moving toward adversary", async () => {
	const testContext = await withTwoPlayersInCombat();
	const game = await getGame(testContext);
	const publicKey = testContext.frontContexts[0].publicKey || "Error";

	const portrayed = await firstValueFrom(
		of(game).pipe(
			observePortrayedConfrontation(
				publicKey,
				from([undefined, undefined, undefined]),
			),
			filter((p) => p?.[0].animation === Animation.Walk),
		),
	);

	if (!portrayed) {
		throw new Error("No value !");
	}

	expect(portrayed.length).toEqual(2);
	expect(portrayed[0].transposed).toEqual(false);
	expect(portrayed[1].transposed).toEqual(false);
	expect(portrayed[0].right).toEqual(false);
	expect(portrayed[1].right).toEqual(true);
	expect(portrayed[0].animation).toEqual(Animation.Walk);
	expect(portrayed[1].animation).toEqual(Animation.Walk);
	expect(portrayed[0].animationStartAt).toBeGreaterThan(0);
	expect(portrayed[1].animationStartAt).toBeGreaterThan(0);

	expect(
		portrayed[0].hero.position.x + portrayed[0].hero.position.y,
	).not.toEqual(0);

	expect(
		portrayed[1].hero.position.x + portrayed[1].hero.position.y,
	).not.toEqual(9);

	await new Promise((resolve) => setTimeout(resolve, 1));
});

test("Both players should see a combat", async () => {
	const testContext = await withTwoPlayersInCombat();
	const game = await getGame(testContext);
	const publicKey1 = testContext.frontContexts[0].publicKey || "Error";
	const publicKey2 = testContext.frontContexts[1].publicKey || "Error";

	await firstValueFrom(
		of(game).pipe(observePortrayedConfrontation(publicKey1, of(undefined))),
	);

	await firstValueFrom(
		of(game).pipe(observePortrayedConfrontation(publicKey2, of(undefined))),
	);

	await new Promise((resolve) => setTimeout(resolve, 1));
});

test("Death animation should persists", async () => {
	const testContext = await withTwoPlayersInCombat();
	const game = await getGame(testContext);
	const publicKey1 = testContext.frontContexts[0].publicKey || "Error";

	const previousPortrayedConfrontation = await firstValueFrom(
		of(game).pipe(observePortrayedConfrontation(publicKey1, of(undefined))),
	);

	const piece = previousPortrayedConfrontation?.[0];

	const heroFactory = new HeroFactory();

	if (!piece) {
		throw new Error("Missing piece !");
	}

	const withDeadHero: Piece[] = [
		{
			animation: Animation.Idle,
			transposed: false,
			animationStartAt: Date.now(),
			right: false,
			hero: heroFactory.build(),
		},
		{
			...piece,
			animation: Animation.Death,
			animationStartAt: 0,
		},
	];

	const portrayedHero = portrayHero(
		piece.hero,
		false,
		game.combats?.[0].actions,
		withDeadHero,
	);

	expect(portrayedHero.animationStartAt).toEqual(0);
});

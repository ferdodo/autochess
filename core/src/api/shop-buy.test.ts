import { test, expect } from "vitest";
import type { Hero } from "../types/Hero.js";
import { asPlayerTransposeBoardToBoard } from "../automations/asPlayerTransposeBoardToBoard.js";
import { getGame } from "../utils/getGame.js";
import { asPlayerShopBuy } from "../automations/asPlayerShopBuy.js";
import { withP1HavingTwentyFiveGolds } from "../fixtures/withP1HavingTwentyFiveGolds.js";
import { withTwoIdenticalHeroAndSameInShop } from "../fixtures/withTwoIdenticalHeroAndSameInShop.js";
import { findIdenticalHeroesWithSameGrade } from "../utils/findIdenticalHeroesWithSameGrade.js";
import { asPlayerShopBuyWithoutUpgrading } from "../automations/asPlayerShopBuyWithoutUpgrading.js";
import { applyHeroMerge } from "../utils/applyHeroMerge.js";

test("Buying from shop should fill the first available slot", async () => {
	const testContext = await withP1HavingTwentyFiveGolds();
	await asPlayerShopBuy(testContext, 0, 0);
	await asPlayerShopBuy(testContext, 0, 1);
	await asPlayerTransposeBoardToBoard(testContext);
	await asPlayerShopBuy(testContext, 0, 2);
	const game = await getGame(testContext);
	const publicKey = testContext.frontContexts[0].publicKey || "Error";
	const bench = game.playerBenches[publicKey];
	expect(bench[0]).toBeTruthy();
});

test("Should not exceed the maximum size of the bench", async () => {
	const testContext = await withP1HavingTwentyFiveGolds();
	await asPlayerShopBuyWithoutUpgrading(testContext);
	await asPlayerShopBuyWithoutUpgrading(testContext);
	await asPlayerShopBuyWithoutUpgrading(testContext);
	await asPlayerShopBuyWithoutUpgrading(testContext);
	await asPlayerShopBuyWithoutUpgrading(testContext);
	await asPlayerShopBuyWithoutUpgrading(testContext);
	await asPlayerShopBuyWithoutUpgrading(testContext);
	const game = await getGame(testContext);
	const publicKey = testContext.frontContexts[0].publicKey || "Error";
	const bench = game.playerBenches[publicKey] || {};
	const benchSize = Object.values(bench).filter(Boolean).length;
	expect(benchSize).toEqual(6);
});

test("Buying a third identical hero of the same grade should merge them into one hero of higher grade", async () => {
	const testContext = await withTwoIdenticalHeroAndSameInShop();
	const publicKey = testContext.frontContexts[0].publicKey || "Error";
	const gameBefore = await getGame(testContext, 0);

	const twoIdentical = findIdenticalHeroesWithSameGrade(gameBefore, publicKey);

	if (!twoIdentical) {
		throw new Error("Could not find two identical heroes");
	}

	const appellation = twoIdentical[0].appellation;
	const grade = twoIdentical[0].grade;

	const productIndex = gameBefore.playerShops[publicKey].findIndex(
		(product) => appellation === product,
	);

	await asPlayerShopBuy(testContext, 0, productIndex);
	const gameAfter = await getGame(testContext, 0);

	const bench = gameAfter.playerBenches[publicKey] || {};
	const board = gameAfter.playerHeroes[publicKey] || [];
	const allHeroes = [...Object.values(bench).filter(Boolean), ...board];

	const heroesSameAppellation = allHeroes.filter(
		(h: Hero) => h.appellation === appellation,
	);
	const heroesSameGrade = heroesSameAppellation.filter(
		(h: Hero) => h.grade === grade,
	);
	const heroesNextGrade = heroesSameAppellation.filter(
		(h: Hero) => h.grade === grade + 1,
	);

	expect(heroesSameGrade).toHaveLength(0);
	expect(heroesNextGrade).toHaveLength(1);
});

test("Bought shop product should become unavailable (null)", async () => {
	const testContext = await withP1HavingTwentyFiveGolds();
	const publicKey = testContext.frontContexts[0].publicKey || "Error";
	const gameBefore = await getGame(testContext, 0);
	const shopBefore = gameBefore.playerShops[publicKey];

	expect(shopBefore[0]).toBeTruthy();
	expect(shopBefore[1]).toBeTruthy();
	expect(shopBefore[2]).toBeTruthy();

	await asPlayerShopBuy(testContext);
	const gameAfter = await getGame(testContext, 0);
	const shopAfter = gameAfter.playerShops[publicKey];

	expect(shopAfter[0]).toBeNull();
	expect(shopAfter[1]).toBeTruthy();
	expect(shopAfter[2]).toBeTruthy();
});

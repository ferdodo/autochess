import { test, expect } from "vitest";
import { withServerStarted } from "../fixtures/withServerStarted.js";
import { asNewPlayerConnect } from "../automations/asNewPlayerConnect.js";
import { asPlayerInitiateGame } from "../automations/asPlayerInitiateGame.js";
import { filter } from "rxjs/operators";
import { firstValueFrom, merge, from } from "rxjs";

test("Player should be removed from queuers on disconnection", async () => {
	const testContext = await withServerStarted();
	asNewPlayerConnect(testContext);
	asPlayerInitiateGame(testContext, 0);
	const publicKey = testContext.frontContexts[0].publicKey || "Error";

	await firstValueFrom(
		merge(
			from(testContext.backContext.dataMapper.readQueuers()),
			testContext.backContext.dataMapper.queuers$,
		).pipe(
			filter((queuers) =>
				queuers.some((queuer) => queuer.publicKey === publicKey),
			),
		),
	);

	testContext.closeConnection[0]();

	await firstValueFrom(
		merge(
			from(testContext.backContext.dataMapper.readQueuers()),
			testContext.backContext.dataMapper.queuers$,
		).pipe(
			filter((queuers) =>
				queuers.every((queuer) => queuer.publicKey !== publicKey),
			),
		),
	);
});

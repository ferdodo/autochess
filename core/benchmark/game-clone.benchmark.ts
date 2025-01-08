import { Bench } from "tinybench";
import { withGameOver } from "../fixtures/with-game-over.js";
import { cloneGame } from "../utils/clone-game.js";
import { getGame } from "../utils/get-game.js";

const bench = new Bench();

/**
 * commit 25fa3958ff3f9629eac43379a1224374b9f9b2d3
 * Date:   Tue Jan 7 12:14:01 2025 +0100
 *
 * ┌─────────┬────────────────────────────────────────────┬──────────────┬──────────┬──────────────┬─────────┐
 * │ (index) │ Task Name                                  │ Average (ms) │ p99 (ms) │ Longest (ms) │ Ops/Sec │
 * ├─────────┼────────────────────────────────────────────┼──────────────┼──────────┼──────────────┼─────────┤
 * │ 0       │ 'Clone game with structured clone'         │ 0            │ 0        │ 5            │ 59558   │
 * │ 1       │ 'Clone game with JSON parse and stringify' │ 0            │ 0        │ 4            │ 59678   │
 * │ 2       │ 'Clone game with manual clone'             │ 0            │ 0        │ 2            │ 478968  │
 * └─────────┴────────────────────────────────────────────┴──────────────┴──────────┴──────────────┴─────────┘
 */
withGameOver()
	.then(async (testContext) => {
		const game = await getGame(testContext);

		bench.add("Clone game with structured clone", () => {
			structuredClone(game);
		});

		bench.add("Clone game with JSON parse and stringify", () => {
			JSON.parse(JSON.stringify(game));
		});

		bench.add("Clone game with manual clone", () => {
			cloneGame(game);
		});

		await bench.run();

		console.table(
			bench.tasks.map(({ name, result }) => ({
				"Task Name": name,
				"Average (ms)": Math.floor(result?.mean ?? 0),
				"p99 (ms)": Math.floor(result?.p99 ?? 0),
				"Longest (ms)": Math.floor(result?.max ?? 0),
				"Ops/Sec": Math.floor(result?.hz ?? 0),
			})),
		);
	})
	.catch(console.error);

import { withGameOverWithP1AdvantageAgainstBot } from "../fixtures/with-game-over-with-p1-advantage-against-bot.js";
import { Bench } from "tinybench";

const bench = new Bench();

bench.add("Bot should win against advantaged player", async () => {
	await withGameOverWithP1AdvantageAgainstBot();
});

bench
	.run()
	.then(() => {
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

import { withGameOver } from "../fixtures/with-game-over.js";
import { Bench } from "tinybench";

const bench = new Bench();

bench.add("Game should run until game is over", () => withGameOver());

bench.run().then(() => {
	console.table(
		bench.tasks.map(({ name, result }) => ({
			"Task Name": name,
			"Average (ms)": Math.floor(result?.mean ?? 0),
			"p99 (ms)": Math.floor(result?.p99 ?? 0),
			"Longest (ms)": Math.floor(result?.max ?? 0),
			"Ops/Sec": Math.floor(result?.hz ?? 0),
		})),
	);
});

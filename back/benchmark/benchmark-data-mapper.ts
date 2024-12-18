import { Bench } from "tinybench";
import type { DataMapper } from "core/types/data-mapper.js";

export async function benchMarkDataMapper(dataMapper: DataMapper) {
	let queuer = {
		nickname: Math.random().toString(),
		publicKey: Math.random().toString(),
		createdAt: new Date().toISOString(),
	};

	const bench = new Bench({ name: "simple benchmark", iterations: 1000 });

	bench.add("Create queuer", () => dataMapper.createQueuer(queuer), {
		beforeEach() {
			queuer = {
				nickname: Math.random().toString(),
				publicKey: Math.random().toString(),
				createdAt: new Date().toISOString(),
			};
		},
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
}

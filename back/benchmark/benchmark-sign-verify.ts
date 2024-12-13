import { Bench } from "tinybench";
import type { DataMapper } from "core/types/data-mapper";
import { createKeyPair } from "../utils/create-key-pair.js";
import { sign } from "../utils/sign.js";
import { verify } from "../utils/verify.js";

export async function benchmarkSignVerify() {
	let [publicKey, privateKey] = await createKeyPair();
	let signed = await sign(publicKey, privateKey, { data: Math.random() });

	let data = { data: Math.random() };

	const bench = new Bench({ name: "simple benchmark", iterations: 2 });

	bench.add("sign", () => sign(publicKey, privateKey, data), {
		async beforeEach() {
			[publicKey, privateKey] = await createKeyPair();
			data = { data: Math.random() };
		},
	});

	bench.add("verify", () => verify(signed), {
		async beforeEach() {
			[publicKey, privateKey] = await createKeyPair();
			signed = await sign(publicKey, privateKey, data);
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

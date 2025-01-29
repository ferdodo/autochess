import os from "node:os";

export function getCPUUsage(): number {
	const cpus = os.cpus();
	let totalIdle = 0;
	let totalTick = 0;

	for (const cpu of cpus) {
		for (const type in cpu.times) {
			totalTick += cpu.times[type];
		}

		totalIdle += cpu.times.idle;
	}

	return 1 - totalIdle / totalTick;
}

import { frameStart$, frameEnd$ } from "core/utils/observe-fps";
import { firstValueFrom } from "rxjs";
import Stats from "stats.js";

export async function createFpsCounter() {
	const stats = new Stats();
	const stats2 = new Stats();
	const stats3 = new Stats();
	stats.showPanel(0);
	stats2.showPanel(1);
	stats3.showPanel(1);
	document.body.appendChild(stats.dom);
	document.body.appendChild(stats2.dom);
	document.body.appendChild(stats3.dom);
	stats2.dom.style.left = "80px";
	stats3.dom.style.left = "160px";

	stats3.begin();
	while (true) {
		await firstValueFrom(frameStart$);
		stats3.end();
		stats.begin();
		stats2.begin();
		await firstValueFrom(frameEnd$);
		stats3.begin();
		stats.end();
		stats2.end();
	}
}

import { frameStart$, frameEnd$ } from "core/utils/observe-fps";
import { firstValueFrom } from "rxjs";
import Stats from "stats.js";
import type { ThreeContext } from "interface/types/three-context";

export async function createFpsCounter(threeContext: ThreeContext) {
	const fpsStat = new Stats();
	const renderTimeStat = new Stats();
	const waitBetweenRendersStat = new Stats();
	const triangleStats = new Stats();
	const texturesStats = new Stats();
	const trianglePanel = new Stats.Panel("Triangles", "#f8f", "#212");
	const texturesPanel = new Stats.Panel("Triangles", "#f8f", "#212");
	triangleStats.addPanel(trianglePanel);
	texturesStats.addPanel(texturesPanel);
	console.log(threeContext.renderer.info);
	fpsStat.showPanel(0);
	renderTimeStat.showPanel(1);
	waitBetweenRendersStat.showPanel(1);
	triangleStats.showPanel(2);
	texturesStats.showPanel(2);
	document.body.appendChild(fpsStat.dom);
	document.body.appendChild(renderTimeStat.dom);
	document.body.appendChild(waitBetweenRendersStat.dom);
	document.body.appendChild(triangleStats.dom);
	document.body.appendChild(texturesStats.dom);
	renderTimeStat.dom.style.left = "80px";
	waitBetweenRendersStat.dom.style.left = "160px";
	triangleStats.dom.style.left = "240px";
	texturesStats.dom.style.left = "320px";

	waitBetweenRendersStat.begin();
	while (true) {
		await firstValueFrom(frameStart$);

		trianglePanel.update(threeContext.renderer.info.render.triangles, 70000);
		texturesPanel.update(threeContext.renderer.info.memory.textures, 80);

		waitBetweenRendersStat.end();
		fpsStat.begin();
		renderTimeStat.begin();
		triangleStats.begin();
		await firstValueFrom(frameEnd$);
		waitBetweenRendersStat.begin();
		fpsStat.end();
		renderTimeStat.end();
		triangleStats.end();
	}
}

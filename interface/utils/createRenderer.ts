import { WebGLRenderer } from "three";
import type { PerspectiveCamera, OrthographicCamera, Scene } from "three";
import { fpsCounter } from "core/src/utils/fpsCounter";
import { getWindowDimentions } from "core/src/utils/getWindowDimentions";

export function createRenderer(
	camera: PerspectiveCamera | OrthographicCamera,
	scene: Scene,
) {
	const renderer = new WebGLRenderer();
	const windowDimentions = getWindowDimentions();
	renderer.setSize(windowDimentions.w, windowDimentions.h);
	renderer.setClearColor(0x0000ff);
	document.body.appendChild(renderer.domElement);

	renderer.setAnimationLoop(() => {
		fpsCounter.notifyFrameStart();
		renderer.render(scene, camera);
		fpsCounter.notifyFrameEnd();
	});

	return renderer;
}

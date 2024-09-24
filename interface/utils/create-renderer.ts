import { WebGLRenderer } from "three";
import type { PerspectiveCamera, OrthographicCamera, Scene } from "three";
import { notifyFrameStart, notifyFrameEnd } from "core/utils/observe-fps";
import { getWindowDimentions } from "core/utils/get-window-dimentions";

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
		notifyFrameStart();
		renderer.render(scene, camera);
		notifyFrameEnd();
	});

	return renderer;
}

import { WebGLRenderer } from "three";
import type { Scene, PerspectiveCamera, OrthographicCamera } from "three";
import type { Block } from "blockwise";

export function createRenderer(
	windowDimentions: Block,
	scene: Scene,
	camera: PerspectiveCamera | OrthographicCamera,
) {
	const renderer = new WebGLRenderer();
	renderer.setSize(windowDimentions.w, windowDimentions.h);
	renderer.setClearColor(0x0000ff);
	document.body.appendChild(renderer.domElement);
	renderer.setAnimationLoop(() => renderer.render(scene, camera));
	return renderer;
}

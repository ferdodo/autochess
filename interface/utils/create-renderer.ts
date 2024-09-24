import { WebGLRenderer } from "three";
import type { Block } from "blockwise";
import type { ThreeContext } from "../types/three-context";
import { notifyFrameStart, notifyFrameEnd } from "core/utils/observe-fps";
import { createCamera } from "./create-camera";

export function createRenderer(
	windowDimentions: Block,
	threeContext: ThreeContext,
) {
	const renderer = new WebGLRenderer();
	threeContext.camera = createCamera();
	renderer.setSize(windowDimentions.w, windowDimentions.h);
	renderer.setClearColor(0x0000ff);
	document.body.appendChild(renderer.domElement);

	renderer.setAnimationLoop(() => {
		notifyFrameStart();

		renderer.render(threeContext.scene, threeContext.camera);
		notifyFrameEnd();
	});

	return renderer;
}

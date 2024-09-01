import { WebGLRenderer } from "three";
import type { Block } from "blockwise";
import { createCamera } from "./create-camera";
import type { Context } from "../types/context";
import { notifyFrame } from "./observe-fps";

export function createRenderer(windowDimentions: Block, context: Context) {
	const renderer = new WebGLRenderer();
	// @ts-ignore
	renderer.debug.checkShaderErrors = import.meta.env.DEV; // might prevent webgl performance issues
	context.camera = createCamera();
	renderer.setSize(windowDimentions.w, windowDimentions.h);
	renderer.setClearColor(0x0000ff);
	document.body.appendChild(renderer.domElement);

	renderer.setAnimationLoop(() => {
		renderer.render(context.scene, context.camera);
		notifyFrame();
	});

	return renderer;
}

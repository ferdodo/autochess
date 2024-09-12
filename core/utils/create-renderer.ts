import { WebGLRenderer } from "three";
import type { Block } from "blockwise";
import type { Context } from "../types/context";
import { notifyFrameStart, notifyFrameEnd } from "./observe-fps";

export function createRenderer(windowDimentions: Block, context: Context) {
	const renderer = new WebGLRenderer();
	renderer.setSize(windowDimentions.w, windowDimentions.h);
	renderer.setClearColor(0x0000ff);
	document.body.appendChild(renderer.domElement);

	renderer.setAnimationLoop(() => {
		notifyFrameStart();

		renderer.render(context.scene, context.camera);
		notifyFrameEnd();
	});

	return renderer;
}

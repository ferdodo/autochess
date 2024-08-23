import type { WebGLRenderer } from "three";

export function removeRenderer(renderer: WebGLRenderer): void {
	renderer.dispose();
	document.body.removeChild(renderer.domElement);
}

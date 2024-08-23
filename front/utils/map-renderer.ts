import { createRenderer } from "./create-renderer";
import type { Scene, PerspectiveCamera, OrthographicCamera } from "three";
import { map } from "rxjs";
import type { Block } from "blockwise";
import type { Observable } from "rxjs";

export function mapRenderer(
	scene: Scene,
	camera: PerspectiveCamera | OrthographicCamera,
) {
	return (source: Observable<Block>) =>
		source.pipe(
			map((windowDimentions) =>
				createRenderer(windowDimentions, scene, camera),
			),
		);
}

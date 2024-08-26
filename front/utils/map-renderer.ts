import { createRenderer } from "./create-renderer";
import type { Scene, PerspectiveCamera, OrthographicCamera } from "three";
import { map } from "rxjs";
import type { Block } from "blockwise";
import type { Observable } from "rxjs";
import type { Context } from "../types/context";
import { createCamera } from "./create-camera";

export function mapRenderer(context: Context) {
	return (source: Observable<Block>) =>
		source.pipe(
			map((windowDimentions) => {
				return createRenderer(windowDimentions, context);
			}),
		);
}

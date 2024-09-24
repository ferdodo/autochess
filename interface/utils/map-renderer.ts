import { createRenderer } from "./create-renderer";
import { map } from "rxjs";
import type { Block } from "blockwise";
import type { Observable } from "rxjs";
import type { ThreeContext } from "../types/three-context";

export function mapRenderer(threeContext: ThreeContext) {
	return (source: Observable<Block>) =>
		source.pipe(
			map((windowDimentions) => {
				return createRenderer(windowDimentions, threeContext);
			}),
		);
}

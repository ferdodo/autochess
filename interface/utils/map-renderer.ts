import { createRenderer } from "./create-renderer";
import { map } from "rxjs";
import type { Block } from "blockwise";
import type { Observable } from "rxjs";
import type { Context } from "../types/context";

export function mapRenderer(context: Context) {
	return (source: Observable<Block>) =>
		source.pipe(
			map((windowDimentions) => {
				return createRenderer(windowDimentions, context);
			}),
		);
}

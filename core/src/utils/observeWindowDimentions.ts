import type { Observable } from "rxjs";
import { fromEvent } from "rxjs";
import { debounceTime, map, share } from "rxjs/operators";
import type { Block } from "blockwise";
import { getWindowDimentions } from "./getWindowDimentions.js";

export function observeWindowDimentions(): Observable<Block> {
	return fromEvent(window, "resize").pipe(
		map(() => getWindowDimentions()),
		debounceTime(100),
		share(),
	);
}

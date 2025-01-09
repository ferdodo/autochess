import { getWindowDimentions } from "./get-window-dimentions.js";
import type { Observable } from "rxjs";
import { fromEvent } from "rxjs";
import { debounceTime, map, share } from "rxjs/operators";
import type { Block } from "blockwise";

export function observeWindowDimentions(): Observable<Block> {
	return fromEvent(window, "resize").pipe(
		map(() => getWindowDimentions()),
		debounceTime(100),
		share(),
	);
}

import { getWindowDimentions } from "./get-window-dimentions";
import type { Observable } from "rxjs";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";
import type { Block } from "blockwise";

export function observeWindowDimentions(): Observable<Block> {
	const subject = new Subject<Block>();

	window.addEventListener("resize", () => {
		const windowDimentions = getWindowDimentions();
		subject.next(windowDimentions);
	});

	return subject.pipe(debounceTime(100));
}

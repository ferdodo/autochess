import { fromEvent, filter, buffer, map, debounceTime, merge } from "rxjs";

const clickOrTap$ = merge(
	fromEvent(document, "click"),
	fromEvent(document, "touchend").pipe(
		filter((e) => (e as TouchEvent).touches.length === 0),
	),
);

export const doubleClick$ = clickOrTap$.pipe(
	buffer(clickOrTap$.pipe(debounceTime(300))),
	map((clicks) => clicks.length),
	filter((clicksCount) => clicksCount === 2),
);

import type { Observable, OperatorFunction } from "rxjs";
import { filter } from "rxjs/operators";
import type { Timestamped } from "../types/timestamped";

const DURATION = /* 2min */ 120000;

export function checkTimestamp<T>(): OperatorFunction<
	T & Timestamped,
	T & Timestamped
> {
	return (source: Observable<T & Timestamped>) =>
		source.pipe(filter(({ timestamp }) => Date.now() - timestamp < DURATION));
}

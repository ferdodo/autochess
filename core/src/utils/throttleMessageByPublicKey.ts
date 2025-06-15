import { throttleTime, groupBy, map, filter, mergeMap } from "rxjs/operators";
import type { MonoTypeOperatorFunction } from "rxjs";
import { identity } from "rxjs";
import { debounceTime } from "rxjs/operators";
import type { ClientMessage } from "../types/ClientMessage.js";
import type { Signed } from "../types/Signed.js";

export function throttleMessageByPublicKey(
	timeThrottle: number,
	timeDebounce: number,
): MonoTypeOperatorFunction<ClientMessage> {
	return (source) =>
		source.pipe(
			map((message): [ClientMessage, Signed | undefined] => [
				message,
				Object.values(message).pop(),
			]),
			filter(([_, signed]) => Boolean(signed)),
			groupBy(([_, signed]) => signed?.publicKey),
			mergeMap((grouped) =>
				grouped.pipe(
					timeDebounce ? debounceTime(timeDebounce) : map(identity),
					timeThrottle ? throttleTime(timeThrottle) : map(identity),
				),
			),
			map(([message]) => message),
		);
}

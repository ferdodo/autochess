import { throttleTime, groupBy, map, filter, mergeMap } from "rxjs/operators";
import type { MonoTypeOperatorFunction } from "rxjs";
import type { ClientMessage } from "../types/client-message.js";
import type { Signed } from "../types/signed.js";
import { identity } from "rxjs";

export function throttleMessageByPublicKey(
	time: number,
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
				grouped.pipe(time ? throttleTime(time) : map(identity)),
			),
			map(([message]) => message),
		);
}

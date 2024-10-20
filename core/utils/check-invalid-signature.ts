import type { Observable, OperatorFunction } from "rxjs";
import { mergeMap, filter, map } from "rxjs/operators";
import type { Signed } from "../types/signed";

export function checkInvalidSignature<T>(
	checkSignature: (signature: T & Signed) => Promise<boolean>,
): OperatorFunction<T & Signed, T & Signed> {
	return (source: Observable<T & Signed>) =>
		source.pipe(
			filter(({ issuedAt, expiresAt }) => {
				const now = new Date().toISOString();
				return issuedAt <= now && now <= expiresAt;
			}),
			mergeMap(async (message) => ({
				message,
				isValid: await checkSignature(message),
			})),
			filter(({ isValid }) => isValid),
			map(({ message }) => message),
		);
}

import type { Observable, OperatorFunction } from "rxjs";
import { mergeMap, filter, map } from "rxjs/operators";
import type { Signed } from "../types/signed.js";

export function checkSignature<T>(
	isValidSignature: (signature: T & Signed) => Promise<boolean>,
): OperatorFunction<T & Signed, T & Signed> {
	return (source: Observable<T & Signed>) =>
		source.pipe(
			filter(({ issuedAt, expiresAt }) => {
				const now = new Date().toISOString();
				const nearFuture = new Date(Date.now() + 5000).toISOString();
				return issuedAt <= nearFuture && now <= expiresAt;
			}),
			mergeMap(async (message) => ({
				message,
				isValid: await isValidSignature(message),
			})),
			filter(({ isValid }) => isValid),
			map(({ message }) => message),
		);
}

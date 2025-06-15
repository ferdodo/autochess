import type { OperatorFunction } from "rxjs";
import { mergeMap, filter, map } from "rxjs/operators";
import type { GameScoped } from "../types/GameScoped.js";
import type { BackContext } from "../types/BackContext.js";

export function checkStamp<T>(
	context: BackContext,
): OperatorFunction<T & GameScoped, T & GameScoped> {
	return (source) =>
		source.pipe(
			mergeMap(async (message) => {
				const { stamp, publicKey, playsig } = message;
				const stampMatchesGame = stamp.playsig === playsig;
				const stampMatchesPlayer = publicKey === stamp.playerPublicKey;
				const stampIsServerSigned = stamp.publicKey === context.serverPublicKey;
				const stampIsAuthentic = await context.isValidSignature(stamp);

				const stampChecksOut =
					stampMatchesPlayer &&
					stampIsAuthentic &&
					stampIsServerSigned &&
					stampMatchesGame;

				return { stampChecksOut, message };
			}),
			filter(({ stampChecksOut }) => stampChecksOut),
			map(({ message }) => message),
		);
}

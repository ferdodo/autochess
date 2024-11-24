import type { FrontContext } from "../types/front-context";
import type { CachedGame } from "../types/cached-game";
import { filter, map, defer, share } from "rxjs";
import type { Observable } from "rxjs";

export function observeGame({
	signMessage,
	connection,
	publicKey,
	playsig,
}: FrontContext): Observable<CachedGame> {
	if (!playsig) {
		throw new Error("playsig is required to observe a game !");
	}

	return defer(() => {
		signMessage({ playsig, publicKey })
			.then((observeGameSubscribe) => {
				connection.send({ observeGameSubscribe });
			})
			.catch(console.error);

		return connection.messages$.pipe(
			map((message) => message.observeGameBroadcast),
			filter(Boolean),
		);
	}).pipe(share());
}

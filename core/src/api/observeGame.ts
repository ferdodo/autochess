import type { FrontContext } from "../types/FrontContext.js";
import { filter, map, defer, share } from "rxjs";
import type { Observable } from "rxjs";
import type { Game } from "../types/Game.js";

export function observeGame({
	signMessage,
	connection,
	publicKey,
	playsig,
}: FrontContext): Observable<Game> {
	if (!playsig) {
		throw new Error("playsig is required to observe a game !");
	}

	return defer(() => {
		signMessage({ playsig })
			.then((observeGameSubscribe) => {
				connection.send({ observeGameSubscribe });
			})
			.catch(console.error);

		return connection.messages$.pipe(
			map((message) => message.observeGameBroadcast),
			filter(Boolean),
			map(({ game }) => game),
		);
	}).pipe(share());
}

import type { FrontContext } from "../types/front-context";
import type { Game } from "../types/game";
import { filter, map, defer } from "rxjs";
import type { Observable } from "rxjs";

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
		signMessage({ playsig, publicKey })
			.then((observeGameSubscribe) => {
				connection.send({ observeGameSubscribe });
			})
			.catch(console.error);

		return connection.messages$.pipe(
			map((message) => message.observeGameBroadcast),
			filter(Boolean),
			map(({ game }) => game),
		);
	});
}

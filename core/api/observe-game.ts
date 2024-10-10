import type { FrontContext } from "../types/front-context";
import type { Game } from "../types/game";
import { filter, map } from "rxjs";
import type { Playsig } from "../types/playsig";
import type { Observable } from "rxjs";

export function observeGame(
	{ signMessage, connection, publicKey }: FrontContext,
	playsig: Playsig,
): Observable<Game> {
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
}

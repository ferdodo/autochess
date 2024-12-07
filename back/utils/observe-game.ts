import type { Collection } from "mongodb";
import { Observable, share } from "rxjs";
import type { Game } from "core/types/game";
import type { Playsig } from "core/types/playsig";

export function observeGame(
	gameCollection: Collection<Game>,
	playsig: Playsig,
): Observable<Game> {
	return new Observable<Game>((subscriber) => {
		const changeStream = gameCollection.watch([
			{ $match: { operationType: "update", "fullDocument.playsig": playsig } },
		]);

		changeStream.on("change", async (change) => {
			if (change.operationType === "update") {
				subscriber.next(change.fullDocument);
			}
		});

		return () => {
			changeStream.close();
		};
	}).pipe(share());
}

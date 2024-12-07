import type { Collection } from "mongodb";
import { Observable, share } from "rxjs";
import type { Game } from "core/types/game";

export function observeCreatedGame(
	gameCollection: Collection<Game>,
): Observable<Game> {
	return new Observable<Game>((subscriber) => {
		const changeStream = gameCollection.watch([
			{ $match: { operationType: "insert" } },
		]);

		changeStream.on("change", async (change) => {
			if (change.operationType === "insert") {
				subscriber.next(change.fullDocument);
			}
		});

		return () => {
			changeStream.close();
		};
	}).pipe(share());
}

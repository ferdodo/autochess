import type { Collection } from "mongodb";
import { Observable, share } from "rxjs";
import type { Game } from "core/types/game";
import type { Playsig } from "core/types/playsig";
import { mongoDeserialize } from "./mongo-deserialize.js";
import type { MongoDeserialized } from "../types/mongo-deserialized.js";

export function observeGame(
	gameCollection: Collection<Game>,
	playsig: Playsig,
): Observable<MongoDeserialized<Game>> {
	return new Observable<MongoDeserialized<Game>>((subscriber) => {
		const changeStream = gameCollection.watch([
			{ $match: { operationType: "update", "fullDocument.playsig": playsig } },
		]);

		changeStream.on("change", async (change) => {
			if (change.operationType === "update") {
				subscriber.next(mongoDeserialize(change.fullDocument));
			}
		});

		return () => {
			changeStream.close();
		};
	}).pipe(share());
}

import type { Collection } from "mongodb";
import { Observable, share } from "rxjs";
import type { Game } from "core/types/game";
import type { MongoDeserialized } from "../types/mongo-deserialized.js";
import { mongoDeserialize } from "./mongo-deserialize.js";
import type { MongoSerialized } from "../types/mongo-serialized.js";

export function observeCreatedGame(
	gameCollection: Collection<MongoSerialized<Game>>,
): Observable<MongoDeserialized<Game>> {
	return new Observable<MongoDeserialized<Game>>((subscriber) => {
		const changeStream = gameCollection.watch([
			{ $match: { operationType: "insert" } },
		]);

		changeStream.on("change", async (change) => {
			if (change.operationType === "insert") {
				subscriber.next(mongoDeserialize(change.fullDocument));
			}
		});

		return () => {
			changeStream.close();
		};
	}).pipe(share());
}

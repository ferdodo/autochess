import { ObjectId } from "mongodb";
import type { MongoSerialized } from "../types/mongo-serialized.js";

export function mongoSerialize<T>(data: T): MongoSerialized<T> {
	return {
		...data,
		_id: new ObjectId().toString(),
	};
}

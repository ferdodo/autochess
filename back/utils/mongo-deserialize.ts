import type { MongoDeserialized } from "../types/mongo-deserialized.js";
import type { MongoSerialized } from "../types/mongo-serialized.js";

export function mongoDeserialize<T>({
	_id,
	...data
}: MongoSerialized<T>): MongoDeserialized<T> {
	return { ...data };
}

import type { MongoDeserialized } from "../types/mongo-deserialized.js";

export function mongoDeserialize<T>(data: T): MongoDeserialized<T> {
	return {
		...data,
		_id: undefined,
	};
}

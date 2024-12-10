interface WithoutObjectId {
	_id: undefined;
}

export type MongoDeserialized<T> = T & WithoutObjectId;

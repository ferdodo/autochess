interface WithObjectId {
	_id: string;
}

export type MongoSerialized<T> = T & WithObjectId;

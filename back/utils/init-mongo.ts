import { MongoClient } from "mongodb";
import type { Db } from "mongodb";

export async function initMongo(): Promise<Db> {
	const client = new MongoClient(
		`mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@database:27017/admin`,
	);

	await client.connect();
	return client.db(process.env.MONGODB_DB_DATABASE);
}

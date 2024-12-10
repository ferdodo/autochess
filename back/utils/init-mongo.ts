import { MongoClient } from "mongodb";
import type { Db } from "mongodb";

export async function initMongo(): Promise<Db> {
	const uri = `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@database:27017,database1:27017,database2:27017/?authSource=${process.env.MONGODB_DATABASE}&replicaSet=rs0`;
	let retries = 0;

	console.log("Connecting to MongoDB...");

	while (true) {
		try {
			const client = new MongoClient(uri);
			await client.connect();
			console.log("MongoDB connected.");
			return client.db(process.env.MONGODB_DB_DATABASE);
		} catch (e) {
			retries++;

			if (retries > 10) {
				throw e;
			}

			await new Promise((resolve) => setTimeout(resolve, 1000));
		}
	}
}

import { MongoClient } from "mongodb";
import type { Db } from "mongodb";

export async function initMongo(): Promise<Db> {
	const uri = `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@mongo-router-node0:27017,mongo-router-node1:27017/?authSource=${process.env.MONGODB_DATABASE}`;
	let retries = 0;

	console.log(`Connecting to MongoDB... ${uri}`);

	while (true) {
		try {
			const client = new MongoClient(uri);
			await client.connect();
			console.log("MongoDB connected !");
			return client.db(process.env.MONGODB_DATABASE);
		} catch (e) {
			retries++;

			if (retries > 10) {
				throw e;
			}

			await new Promise((resolve) => setTimeout(resolve, 1000));
		}
	}
}

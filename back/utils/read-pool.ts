import type { Pool } from "core/types/pool.js";
import type { Playsig } from "core/types/playsig.js";
import type { MikroORM } from "@mikro-orm/core";
import { PoolEntity } from "../entities/pool.js";
import type { MongoDeserialized } from "../types/mongo-deserialized.js";
import { mongoDeserialize } from "./mongo-deserialize.js";

export async function readPool(
	orm: MikroORM,
	playsig: Playsig,
): Promise<MongoDeserialized<Pool> | null> {
	const em = orm.em.fork();
	const poolRepository = em.getRepository(PoolEntity);
	const pool = await poolRepository.findOne({ playsig });
	return mongoDeserialize(pool);
}

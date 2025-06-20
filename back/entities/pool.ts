import type { Pool as PoolType } from "core/src/types/Pool.js";
import { Entity, PrimaryKey, Property, Unique } from "@mikro-orm/core";

@Entity()
class Pool {
	@PrimaryKey()
	playsig: string;

	@Property({ type: "json" })
	heroes: PoolType["heroes"];
}

export const PoolEntity = Pool;

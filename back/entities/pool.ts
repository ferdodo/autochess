import type { Pool as PoolType } from "core/types/pool";
import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import type { EntityRepository, EntityManager } from "@mikro-orm/core";

@Entity()
class Pool {
	@PrimaryKey()
	_id: string;

	@Property()
	playsig: string;

	@Property()
	heroes: PoolType["heroes"];
}

export const PoolEntity = Pool;

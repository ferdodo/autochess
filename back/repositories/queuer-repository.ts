import type { PublicKey } from "core/types/public-key";
import type { Nickname } from "core/types/nickname";
import type { DateTime } from "core/types/date-time";
import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import type { EntityRepository, EntityManager } from "@mikro-orm/core";

@Entity()
export class Queuer {
	@PrimaryKey()
	_id;

	@Property()
	publicKey: PublicKey;

	@Property()
	nickname: Nickname;

	@Property()
	createdAt: DateTime;
}

export type QueuerRepository = EntityRepository<Queuer>;

export function getQueuerRepository(
	em: EntityManager,
): EntityRepository<Queuer> {
	return em.getRepository(Queuer);
}

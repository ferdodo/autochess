import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import type { PublicKey } from "core/src/types/PublicKey.js";

@Entity()
class Ranking {
	@PrimaryKey()
	publicKey: PublicKey;

	@Property()
	elo: number;
}

export const RankingEntity = Ranking;

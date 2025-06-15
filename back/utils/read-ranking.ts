import type { MikroORM } from "@mikro-orm/core";
import type { Ranking } from "core/src/types/Ranking.js";
import { RankingEntity } from "../entities/ranking.js";
import type { PublicKey } from "core/src/types/PublicKey.js";

export async function readRanking(
	orm: MikroORM,
	publicKey: PublicKey,
): Promise<Ranking> {
	const em = orm.em.fork();
	const rankingRepository = em.getRepository(RankingEntity);

	const ranking = await rankingRepository.findOne({ publicKey });

	if (!ranking) {
		return {
			publicKey,
			elo: 1000,
		};
	}

	return ranking;
}

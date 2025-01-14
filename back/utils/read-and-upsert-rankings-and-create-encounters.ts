import type { MikroORM } from "@mikro-orm/core";
import { RankingEntity } from "../entities/ranking.js";
import { EncounterEntity } from "../entities/encounter.js";
import type { Ranking } from "core/types/ranking.js";
import type { Encounter } from "core/types/encounter.js";
import type { PublicKey } from "core/types/public-key.js";
import { LockMode } from "@mikro-orm/core";

interface ReadAndUpsertRankingsAndCreateEncounters {
	rankings: Ranking[];
	commit: (
		newEncounters: Encounter[],
		newRankings: Ranking[],
	) => Promise<boolean>;
	abort: () => Promise<void>;
}

export async function readAndUpsertRankingsAndCreateEncounters(
	orm: MikroORM,
	playersPublicKeys: PublicKey[],
): Promise<ReadAndUpsertRankingsAndCreateEncounters | undefined> {
	const em = orm.em.fork();

	try {
		await em.begin();
		const rankingRepository = em.getRepository(RankingEntity);
		const encounterRepository = em.getRepository(EncounterEntity);

		const rankings = await rankingRepository.find(
			{
				publicKey: { $in: playersPublicKeys },
			},
			{ lockMode: LockMode.PESSIMISTIC_WRITE },
		);

		return {
			rankings,
			async commit(newEncounters: Encounter[], newRankings: Ranking[]) {
				for (const encounter of newEncounters) {
					await encounterRepository.create(encounter);
				}

				await rankingRepository.upsertMany(newRankings);
				await em.flush();
				await em.commit();
				return true;
			},
			async abort() {
				await em.rollback();
			},
		};
	} catch (error) {
		await em.rollback();
		throw error;
	}
}

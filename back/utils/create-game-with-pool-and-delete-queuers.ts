import type { Game } from "core/types/game.js";
import type { Pool } from "core/types/pool.js";
import type { PublicKey } from "core/types/public-key.js";
import type { RedisClientType } from "redis";
import { RedisEvent } from "../types/redis-events.js";
import type { Queuer } from "core/types/queuer.js";

export async function createGameWithPoolAndDeleteQueuers(
	redis: RedisClientType,
	game: Game,
	pool: Pool,
	queuersPublicKeys: PublicKey[],
): Promise<boolean> {
	try {
		await new Promise((resolve) => setTimeout(resolve, 10));
		const gameKey = `game:${game.playsig}`;
		const poolKey = `pool:${pool.playsig}`;
		const queuersKey = "queuers";
		await redis.watch([queuersKey, gameKey, poolKey]);
		const transaction = redis.multi();
		const queuersString = await redis.get(queuersKey);
		const queuers = queuersString ? JSON.parse(queuersString) : [];

		const newQueuers = queuers.filter(
			(queuer: Queuer) => !queuersPublicKeys.includes(queuer.publicKey),
		);

		transaction.set(gameKey, JSON.stringify(game));
		transaction.set(poolKey, JSON.stringify(pool));
		transaction.set(queuersKey, JSON.stringify(newQueuers));
		await transaction.exec();
		await redis.unwatch();
		redis.publish(RedisEvent.GameCreate, game.playsig);
		redis.publish(RedisEvent.QueuerLeave, "");
		return true;
	} catch (e) {
		await redis.unwatch();

		if (
			e.message.includes("One (or more) of the watched keys has been changed")
		) {
			console.warn("Game not created", e);
			return false;
		}

		throw e;
	}
}

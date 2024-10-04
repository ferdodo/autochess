import type { Subscription } from "rxjs";
import { throttleTime } from "rxjs/operators";
import { createGameId } from "./create-game-id";
import type { BackContext } from "../types/back-context";

const MATCHMAKING_THROTTLE_TIME = 5000;

export function matchmake({
	queuerDataMapper,
	gameDataMapper,
}: BackContext): Subscription {
	return queuerDataMapper
		.observe()
		.pipe(throttleTime(MATCHMAKING_THROTTLE_TIME))
		.subscribe(async (queuers) => {
			if (queuers.length > 8) {
				const oldestFirst = [...queuers].sort(
					(a, b) => a.createdAt - b.createdAt,
				);

				const players = oldestFirst.slice(0, 8);

				const nicknames = players.reduce(
					(acc, player) => {
						acc[player.publicKey] = player.nickname;
						return acc;
					},
					<Record<string, string>>{},
				);

				await gameDataMapper.createAndRemoveQueuers({
					id: createGameId(players),
					publicKeys: players.map((player) => player.publicKey),
					nicknames,
				});
			}
		});
}

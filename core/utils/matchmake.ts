import type { Subscription } from "rxjs";
import { throttleTime } from "rxjs/operators";
import { createGameId } from "./create-game-id";
import type { BackContext } from "../types/back-context";
import { merge, tap } from "rxjs";

const MATCHMAKING_THROTTLE_TIME = 5000;
const MATCHMAKING_LATE = 30000;

export function matchmake({
	queuerDataMapper,
	gameDataMapper,
}: BackContext): Subscription {
	const startWhenEight$ = queuerDataMapper.observe().pipe(
		throttleTime(MATCHMAKING_THROTTLE_TIME),
		tap(async (queuers) => {
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
		}),
	);

	const startWhenLate$ = queuerDataMapper.observe().pipe(
		throttleTime(MATCHMAKING_LATE),
		tap(async (queuers) => {
			if (queuers.length > 1) {
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
		}),
	);

	return merge(startWhenEight$, startWhenLate$).subscribe();
}

import type { FrontContext } from "../types/front-context.js";
import type { InitiateGameReponse } from "../types/initiate-game-response.js";
import { firstValueFrom, filter, map } from "rxjs";

export async function initiateGame({
	connection,
	publicKey,
	nickname,
	signMessage,
}: FrontContext): Promise<InitiateGameReponse> {
	connection.send({
		initiateGameRequest: await signMessage({
			nickname,
			publicKey,
		}),
	});

	return firstValueFrom(
		connection.messages$.pipe(
			map((message) => message.initiateGameResponse),
			filter(Boolean),
		),
	);
}

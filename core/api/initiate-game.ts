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
		}),
	});

	const response = await firstValueFrom(
		connection.messages$.pipe(
			map((message) => message.initiateGameResponse),
			filter(Boolean),
			filter(
				(initiateGameResponse) =>
					initiateGameResponse.stamp.playerPublicKey === publicKey,
			),
		),
		{
			defaultValue: {
				playsig: "Connection closed !",
			} as InitiateGameReponse,
		},
	);

	if (response.playsig === "Connection closed !") {
		throw new Error("Connection closed !");
	}

	return response;
}

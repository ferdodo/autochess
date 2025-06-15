import type { FrontContext } from "../types/FrontContext.js";
import { firstValueFrom, filter, map } from "rxjs";
import type { InitiateGameReponse } from "../types/InitiateGameReponse.js";

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

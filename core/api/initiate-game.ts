import type { FrontContext } from "../types/front-context";

export async function initiateGame({
	connection,
	publicKey,
	nickname,
	signMessage,
}: FrontContext) {
	connection.send({
		initiateGameRequest: await signMessage({
			nickname,
			publicKey,
		}),
	});
}

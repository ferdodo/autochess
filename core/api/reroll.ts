import type { FrontContext } from "../types/front-context";
import { getCachedGame } from "../utils/get-cached-gamed";

export async function reroll(context: FrontContext): Promise<void> {
	const { signMessage, connection, publicKey, playsig } = context;

	if (!playsig) {
		throw new Error("playsig is required to reroll !");
	}

	const cachedGame = await getCachedGame(context);
	const rerollRequest = await signMessage({ playsig, publicKey, cachedGame });
	connection.send({ rerollRequest });
}

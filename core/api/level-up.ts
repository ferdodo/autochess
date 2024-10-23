import type { FrontContext } from "../types/front-context";
import { getCachedGame } from "../utils/get-cached-gamed";

export async function levelUp(context: FrontContext): Promise<void> {
	const { signMessage, connection, publicKey, playsig } = context;

	if (!playsig) {
		throw new Error("playsig is required to level up !");
	}

	const cachedGame = await getCachedGame(context);
	const levelUpRequest = await signMessage({ playsig, publicKey, cachedGame });
	connection.send({ levelUpRequest });
}

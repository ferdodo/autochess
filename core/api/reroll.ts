import type { FrontContext } from "../types/front-context";
import { getCachedGame } from "../utils/get-cached-gamed";

export async function reroll(context: FrontContext): Promise<void> {
	const { signMessage, connection, publicKey } = context;
	const cachedGame = await getCachedGame(context);
	const rerollRequest = await signMessage({ publicKey, cachedGame });
	connection.send({ rerollRequest });
}

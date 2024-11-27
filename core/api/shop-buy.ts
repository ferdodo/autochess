import type { FrontContext } from "../types/front-context";
import { getCachedGame } from "../utils/get-cached-gamed";

export async function shopBuy(
	context: FrontContext,
	item: number,
): Promise<void> {
	const { signMessage, connection, publicKey } = context;
	const cachedGame = await getCachedGame(context);
	const shopBuyRequest = await signMessage({ item, publicKey, cachedGame });
	connection.send({ shopBuyRequest });
}

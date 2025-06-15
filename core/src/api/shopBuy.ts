import type { FrontContext } from "../types/FrontContext.js";

export async function shopBuy(
	context: FrontContext,
	item: number,
): Promise<void> {
	const { signMessage, connection, publicKey, stamp, playsig } = context;

	if (!stamp) {
		throw new Error("stamp is required to buy an item !");
	}

	if (!playsig) {
		throw new Error("playsig is required to buy an item !");
	}

	const shopBuyRequest = await signMessage({ item, stamp, playsig });
	connection.send({ shopBuyRequest });
}

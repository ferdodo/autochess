import type { FrontContext } from "../types/front-context.js";

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

	const shopBuyRequest = await signMessage({ item, publicKey, stamp, playsig });
	connection.send({ shopBuyRequest });
}

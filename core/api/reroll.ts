import type { FrontContext } from "../types/front-context.js";

export async function reroll(context: FrontContext): Promise<void> {
	const { signMessage, connection, publicKey, stamp, playsig } = context;

	if (!stamp) {
		throw new Error("stamp is required to reroll !");
	}

	if (!playsig) {
		throw new Error("playsig is required to reroll !");
	}

	const rerollRequest = await signMessage({ stamp, playsig });
	connection.send({ rerollRequest });
}

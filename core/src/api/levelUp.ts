import type { FrontContext } from "../types/FrontContext.js";

export async function levelUp(context: FrontContext): Promise<void> {
	const { signMessage, connection, publicKey, stamp, playsig } = context;

	if (!stamp) {
		throw new Error("stamp is required to level up !");
	}

	if (!playsig) {
		throw new Error("playsig is required to level up !");
	}

	const levelUpRequest = await signMessage({ playsig, stamp });
	connection.send({ levelUpRequest });
}

import type { FrontContext } from "../types/front-context";

export async function levelUp({
	signMessage,
	connection,
	publicKey,
	playsig,
}: FrontContext): Promise<void> {
	if (!playsig) {
		throw new Error("playsig is required to level up !");
	}

	const levelUpRequest = await signMessage({ playsig, publicKey });
	connection.send({ levelUpRequest });
}

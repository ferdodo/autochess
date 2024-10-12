import type { FrontContext } from "../types/front-context";

export async function reroll({
	signMessage,
	connection,
	publicKey,
	playsig,
}: FrontContext): Promise<void> {
	if (!playsig) {
		throw new Error("playsig is required to reroll !");
	}

	const rerollRequest = await signMessage({ playsig, publicKey });
	connection.send({ rerollRequest });
}

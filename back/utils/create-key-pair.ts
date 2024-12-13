import { webcrypto } from "node:crypto";

export async function createKeyPair(): Promise<[string, string]> {
	const keyPair: CryptoKeyPair = await webcrypto.subtle.generateKey(
		{ name: "ECDSA", namedCurve: "P-384" },
		true,
		["verify", "sign"],
	);

	const publicKeyBuffer: ArrayBuffer = await webcrypto.subtle.exportKey(
		"spki",
		keyPair.publicKey,
	);

	const privateKeyBuffer: ArrayBuffer = await webcrypto.subtle.exportKey(
		"pkcs8",
		keyPair.privateKey,
	);

	const publicKey: string = buf2hex(publicKeyBuffer);
	const privateKey: string = buf2hex(privateKeyBuffer);
	return [publicKey, privateKey];
}

function buf2hex(buffer: ArrayBuffer): string {
	return [...new Uint8Array(buffer)]
		.map((x) => x.toString(16))
		.map((x) => x.padStart(2, "0"))
		.join("");
}

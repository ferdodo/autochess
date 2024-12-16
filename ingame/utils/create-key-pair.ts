export async function createKeyPair(): Promise<[string, string]> {
	const keyPair: CryptoKeyPair = await window.crypto.subtle.generateKey(
		{
			name: "ECDSA",
			namedCurve: "P-384",
		},
		true,
		["sign", "verify"],
	);

	const publicKeyBuffer: ArrayBuffer = await window.crypto.subtle.exportKey(
		"spki",
		keyPair.publicKey,
	);

	const privateKeyBuffer: ArrayBuffer = await window.crypto.subtle.exportKey(
		"pkcs8",
		keyPair.privateKey,
	);

	const publicKey: string = bufToHex(publicKeyBuffer);
	const privateKey: string = bufToHex(privateKeyBuffer);

	return [publicKey, privateKey];
}

function bufToHex(buffer: ArrayBuffer): string {
	return [...new Uint8Array(buffer)]
		.map((x) => x.toString(16))
		.map((x) => x.padStart(2, "0"))
		.join("");
}

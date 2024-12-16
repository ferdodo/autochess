import type { Signed } from "core/types/signed";

export async function sign<T>(
	publicKey: string,
	privateKeyStr: string,
	payload: T,
): Promise<T & Signed> {
	const privateKeyBuffer = new Uint8Array(
		privateKeyStr.match(/.{1,2}/g)?.map((byte) => Number.parseInt(byte, 16)) ??
			[],
	).buffer;

	const ecKeyImportParams: EcKeyImportParams = {
		name: "ECDSA",
		namedCurve: "P-384",
	};

	const privateKey: CryptoKey = await window.crypto.subtle.importKey(
		"pkcs8",
		privateKeyBuffer,
		ecKeyImportParams,
		false,
		["sign"],
	);

	const payloadAsString: string = JSON.stringify(payload);
	const payloadAsBuffer = new TextEncoder().encode(payloadAsString);
	const ecdsaParams: EcdsaParams = { name: "ECDSA", hash: "SHA-384" };

	const signatureBuf: ArrayBuffer = await window.crypto.subtle.sign(
		ecdsaParams,
		privateKey,
		payloadAsBuffer,
	);

	const signature: string = buf2hex(signatureBuf);

	return {
		...payload,
		publicKey,
		signature,
		issuedAt: new Date().toISOString(),
		expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 2).toISOString(),
	};
}

function buf2hex(buffer: ArrayBuffer): string {
	return [...new Uint8Array(buffer)]
		.map((x) => x.toString(16))
		.map((x) => x.padStart(2, "0"))
		.join("");
}

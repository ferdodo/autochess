import type { Signed } from "core/types/signed";
import { webcrypto } from "node:crypto";

export async function sign<T>(
	publicKey: string,
	payload: T,
): Promise<T & Signed> {
	const privateKeyStr: string = process.env.SIGNING_PRIVATE_KEY;
	const privateKeyBuffer: ArrayBuffer = Buffer.from(privateKeyStr, "base64");

	const ecKeyImportParams: EcKeyImportParams = {
		name: "ECDSA",
		namedCurve: "P-384",
	};

	const privateKey: CryptoKey = await webcrypto.subtle.importKey(
		"pkcs8",
		privateKeyBuffer,
		ecKeyImportParams,
		false,
		["sign"],
	);

	const payloadAsString: string = JSON.stringify(
		payload,
		Object.keys(payload).sort(),
	);

	const payloadAsBuffer: Buffer = Buffer.from(payloadAsString, "utf8");
	const ecdsaParams: EcdsaParams = { name: "ECDSA", hash: "SHA-384" };

	const signatureBuf: ArrayBuffer = await webcrypto.subtle.sign(
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

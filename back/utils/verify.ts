import type { Signed } from "core/types/signed.js";
import { subtle } from "node:crypto";

export async function verify<T>({
	publicKey,
	signature,
	issuedAt,
	expiresAt,
	...payload
}: T & Signed): Promise<boolean> {
	try {
		if (new Date() > new Date(expiresAt)) {
			return false;
		}

		const publicKeyBuffer: Buffer = Buffer.from(publicKey, "hex");

		const ecKeyImportParams: EcKeyImportParams = {
			name: "ECDSA",
			namedCurve: "P-384",
		};

		const publicCryptoKey: CryptoKey = await subtle.importKey(
			"spki",
			publicKeyBuffer,
			ecKeyImportParams,
			false,
			["verify"],
		);

		const ecdsaParams: EcdsaParams = { name: "ECDSA", hash: "SHA-384" };
		const signatureBuffer: Buffer = Buffer.from(signature, "hex");
		const payloadSerialised: string = JSON.stringify(payload);
		const payloadBuffer: Buffer = Buffer.from(payloadSerialised, "utf-8");

		const valid = await subtle.verify(
			ecdsaParams,
			publicCryptoKey,
			signatureBuffer,
			payloadBuffer,
		);

		return valid;
	} catch (_e) {
		console.log("error", _e);

		return false;
	}
}

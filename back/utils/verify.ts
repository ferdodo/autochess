import type { Signed } from "core/types/signed";
import { subtle } from "node:crypto";

export async function verify<T>(payload: T & Signed): Promise<boolean> {
	try {
		if (new Date() > new Date(payload.expiresAt)) {
			return false;
		}

		const publicKey: string = payload.publicKey;
		const signature: string = payload.signature;
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

		const payloadSerialised: string = JSON.stringify(
			payload,
			Object.keys(payload).sort(),
		);

		const payloadBuffer: Buffer = Buffer.from(payloadSerialised, "utf8");

		const valid = subtle.verify(
			ecdsaParams,
			publicCryptoKey,
			signatureBuffer,
			payloadBuffer,
		);

		return valid;
	} catch (_e) {
		return false;
	}
}

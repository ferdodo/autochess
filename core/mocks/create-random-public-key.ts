export function createRandomPublicKey(): string {
	let publicKey = "";

	while (publicKey.length < 240) {
		publicKey += Math.random()
			.toString(16)
			.slice(2, 2 + 60);
	}

	return publicKey.slice(0, 240);
}

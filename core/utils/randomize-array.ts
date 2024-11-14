export function randomizeArray<T>(array: T[]): T[] {
	const source = array.slice();
	const destination: T[] = [];

	while (source.length > 0) {
		const randomIndex = Math.floor(Math.random() * source.length);
		const randomElement = source.splice(randomIndex, 1)[0];
		destination.push(randomElement);
	}

	return destination;
}

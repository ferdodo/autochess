const duration = /* 2min */ 120000;

export function isTimestampExpired(timestamp: number): boolean {
	return Date.now() - timestamp > duration;
}

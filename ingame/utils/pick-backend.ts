export function pickBackend(): [string, string] {
	const domains = import.meta.env.VITE_WEBSOCKET_DOMAINS.split(",");
	const ports = import.meta.env.VITE_WEBSOCKET_PORTS.split(",");
	const index = Math.floor(Math.random() * domains.length);
	return [domains[index], ports[index]];
}

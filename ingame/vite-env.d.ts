/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_WEBSOCKET_PROTOCOL: string;
	readonly VITE_WEBSOCKET_PORTS: string;
	readonly VITE_WEBSOCKET_DOMAINS: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

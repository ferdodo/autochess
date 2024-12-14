/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_WEBSOCKET_PROTOCOL: string;
	readonly VITE_WEBSOCKET_PORT: string;
	readonly VITE_BACK_DOMAIN: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

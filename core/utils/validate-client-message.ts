import type { ClientMessage } from "../types/client-message.js";
import { clientMessageSchema } from "../types/client-message.js";

const jsonSchemaLibrary = import("json-schema-library");

export async function validateClientMessage(
	message: ClientMessage,
): Promise<[boolean, string]> {
	const { Draft07 } = await jsonSchemaLibrary;
	const errors = new Draft07(clientMessageSchema).validate(message);
	return [!errors.length, JSON.stringify(errors, null, 2)];
}

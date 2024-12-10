import type { ClientMessage } from "../types/client-message.js";
import { clientMessageSchema } from "../types/client-message.js";

const waitJsonSchemaLibrary = import("json-schema-library");

export async function validateClientMessage(
	message: ClientMessage,
): Promise<[boolean, string]> {
	const jsonSchemaLibrary = await waitJsonSchemaLibrary;

	const Draft07 =
		jsonSchemaLibrary.Draft07 || jsonSchemaLibrary.default.Draft07;

	const errors = new Draft07(clientMessageSchema).validate(message);
	return [!errors.length, JSON.stringify(errors, null, 2)];
}

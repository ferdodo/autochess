import type { ClientMessage } from "../types/client-message.js";
import { clientMessageSchema } from "../types/client-message.js";
import { Draft07 } from "json-schema-library";

export async function validateClientMessage(
	message: ClientMessage,
): Promise<[boolean, string]> {
	const errors = new Draft07(clientMessageSchema).validate(message);
	return [!errors.length, JSON.stringify(errors, null, 2)];
}

import type { ClientMessage } from "../types/client-message";
import { clientMessageSchema } from "../types/client-message";
import { Draft07 } from "json-schema-library";

export function validateClientMessage(
	message: ClientMessage,
): [boolean, string] {
	const errors = new Draft07(clientMessageSchema).validate(message);
	return [!errors.length, JSON.stringify(errors, null, 2)];
}

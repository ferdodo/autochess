import { compileSchema } from "json-schema-library";
import type { ClientMessage } from "../types/ClientMessage.js";
import { clientMessageSchema } from "../schemas/clientMessageSchema.js";

export function createClientMessageValidator(): (
	message: ClientMessage,
) => [boolean, string] {
	const schema = compileSchema(clientMessageSchema);

	return (message: ClientMessage) => {
		const { valid, errors } = schema.validate(message);
		return [valid, JSON.stringify(errors, null, 2)];
	};
}

import type { FromSchema } from "json-schema-to-ts";
import type { ClientMessage } from "../types/client-message";
import { clientMessageSchema } from "../types/client-message";
import { Draft07 } from "json-schema-library";

export function validateClientMessage(
	message: ClientMessage,
): [boolean, string] {
	const errors = new Draft07(clientMessageSchema).validate(
		enforceConsistency(message),
	);

	return [!errors.length, JSON.stringify(errors, null, 2)];
}

/**
 * Noop function.
 *
 * Assignations between Message and FromSchema are enforcing
 * consistency between JSON-schema and Typescript interfaces
 * at compile time. ❤️
 */
export function enforceConsistency(message: ClientMessage): ClientMessage {
	const messageCastedFromSchema: FromSchema<typeof clientMessageSchema> =
		message;
	return messageCastedFromSchema;
}

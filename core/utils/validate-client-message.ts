import type { FromSchema } from "json-schema-to-ts";
import { validate } from "jsonschema";
import type { ClientMessage } from "../types/client-message";
import { clientMessageSchema } from "../types/client-message";

export function validateClientMessage(
	message: ClientMessage,
): [boolean, string] {
	const { errors, valid } = validate(
		enforceConsistency(message),
		clientMessageSchema,
		{
			required: true,
		},
	);

	return [valid, JSON.stringify(errors, null, 2)];
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

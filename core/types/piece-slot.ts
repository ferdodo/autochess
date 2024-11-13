import type { FromSchema } from "json-schema-to-ts";
import type { JsonSchemaRecommended } from "json-schema-policies";

export interface PieceSlot {
	positionX?: number;
	positionY?: number;
	benchPosition?: number;
}

export const pieceSlotSchema = {
	type: "object",
	title: "Piece Slot",
	description: "Position of a piece on the board or the bench.",
	required: [],
	properties: {
		positionX: {
			title: "Position X",
			description: "Horizontal position of the piece on the board.",
			type: "integer",
			minimum: 0,
			maximum: 99,
		},
		positionY: {
			title: "Position Y",
			description: "Vertical position of the piece on the board.",
			type: "integer",
			minimum: 0,
			maximum: 99,
		},
		benchPosition: {
			title: "Bench Position",
			description: "Position of the piece on the bench.",
			type: "integer",
			minimum: 0,
			maximum: 5,
		},
	},
	additionalProperties: false,
} as const;

const a: PieceSlot = {} as FromSchema<typeof pieceSlotSchema>;
const b: FromSchema<typeof pieceSlotSchema> = {} as PieceSlot;
const c: JsonSchemaRecommended = pieceSlotSchema;

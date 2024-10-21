import type { FromSchema } from "json-schema-to-ts";

export interface PieceSlot {
	positionX?: number;
	positionY?: number;
	benchPosition?: number;
}

export const pieceSlotSchema = {
	type: "object",
	required: [],
	properties: {
		positionX: {
			type: "integer",
			minimum: 0,
			maximum: 99,
		},
		positionY: {
			type: "integer",
			minimum: 0,
			maximum: 99,
		},
		benchPosition: {
			type: "integer",
			minimum: 0,
			maximum: 5,
		},
	},
	additionalProperties: false,
} as const;

const a: PieceSlot = {} as FromSchema<typeof pieceSlotSchema>;
const b: FromSchema<typeof pieceSlotSchema> = {} as PieceSlot;

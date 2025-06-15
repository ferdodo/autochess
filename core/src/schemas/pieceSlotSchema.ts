import { createRecommendedSchema } from "json-schema-policies";

export const pieceSlotSchema = createRecommendedSchema({
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
} as const);

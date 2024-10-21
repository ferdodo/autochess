import { appellationSchema, type Appellation } from "./appellation";
import type { Block } from "blockwise";
import { attributesSchema, type Attributes } from "./attributes";
import { gradeSchema, type Grade } from "./grade";
import type { FromSchema } from "json-schema-to-ts";
import { blockSchema } from "blockwise";
import { uidSchema } from "./uid";

export interface Hero {
	id: string;
	appellation: Appellation;
	grade: Grade;
	position: Block;
	attributes: Attributes;
}

export const heroSchema = {
	type: "object",
	required: ["id", "appellation", "grade", "position", "attributes"],
	properties: {
		id: uidSchema,
		appellation: appellationSchema,
		grade: gradeSchema,
		position: blockSchema,
		attributes: attributesSchema,
	},
	additionalProperties: false,
} as const;

const a: Hero = {} as FromSchema<typeof heroSchema>;
const b: FromSchema<typeof heroSchema> = {} as Hero;

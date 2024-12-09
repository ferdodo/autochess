import { appellationSchema, type Appellation } from "./appellation.js";
import type { Block } from "blockwise";
import { attributesSchema, type Attributes } from "./attributes.js";
import { gradeSchema, type Grade } from "./grade.js";
import type { FromSchema } from "json-schema-to-ts";
import { blockSchema } from "blockwise";
import type { HeroId } from "./hero-id.js";
import { heroIdSchema } from "./hero-id.js";
import type { JsonSchemaRecommended } from "json-schema-policies";

export interface Hero {
	id: HeroId;
	appellation: Appellation;
	grade: Grade;
	position: Block;
	attributes: Attributes;
}

export const heroSchema = {
	type: "object",
	title: "Hero",
	description: "Character in the game.",
	required: ["id", "appellation", "grade", "position", "attributes"],
	properties: {
		id: heroIdSchema,
		appellation: appellationSchema,
		grade: gradeSchema,
		position: blockSchema,
		attributes: attributesSchema,
	},
	additionalProperties: false,
} as const;

const a: Hero = {} as FromSchema<typeof heroSchema>;
const b: FromSchema<typeof heroSchema> = {} as Hero;
const c: JsonSchemaRecommended = heroSchema;

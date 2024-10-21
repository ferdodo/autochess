import type { FromSchema } from "json-schema-to-ts";

export type Level = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export const levelSchema = {
	enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
} as const;

const a: FromSchema<typeof levelSchema> = {} as Level;
const b: Level = {} as FromSchema<typeof levelSchema>;

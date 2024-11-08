import type { Uid } from "./uid";
import { uidSchema } from "./uid";

export type HeroId = Uid;
export const heroIdSchema = uidSchema;

import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import type { PublicKey } from "core/types/public-key.js";
import type { Playsig } from "core/types/playsig.js";
import type { DateTime } from "core/types/date-time.js";

@Entity()
class Encounter {
	@PrimaryKey()
	playsig: Playsig;

	@Property()
	winnerPublicKey: PublicKey;

	@Property()
	loserPublicKey: PublicKey;

	@Property()
	createdAt: DateTime;
}

export const EncounterEntity = Encounter;

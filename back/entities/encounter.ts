import { Entity, PrimaryKey, Property, PrimaryKeyProp } from "@mikro-orm/core";
import type { PublicKey } from "core/types/public-key.js";
import type { Playsig } from "core/types/playsig.js";
import type { DateTime } from "core/types/date-time.js";

@Entity()
class Encounter {
	@PrimaryKey()
	playsig: Playsig;

	@PrimaryKey()
	winnerPublicKey: PublicKey;

	@PrimaryKey()
	loserPublicKey: PublicKey;

	[PrimaryKeyProp]?: ["playsig", "winnerPublicKey", "loserPublicKey"];

	constructor(
		playsig: Playsig,
		winnerPublicKey: PublicKey,
		loserPublicKey: PublicKey,
	) {
		this.playsig = playsig;
		this.winnerPublicKey = winnerPublicKey;
		this.loserPublicKey = loserPublicKey;
	}

	@Property()
	createdAt: DateTime;
}

export const EncounterEntity = Encounter;

import { Entity, PrimaryKey, Property, PrimaryKeyProp } from "@mikro-orm/core";
import type { PublicKey } from "core/src/types/PublicKey.js";
import type { Playsig } from "core/src/types/Playsig.js";
import type { DateTime } from "core/src/types/DateTime.js";
import { Check } from "@mikro-orm/core";

@Entity()
@Check({ expression: "winner_public_key != loser_public_key" })
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

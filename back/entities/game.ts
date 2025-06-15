import type { Playsig } from "core/src/types/Playsig.js";
import type { PublicKey } from "core/src/types/PublicKey.js";
import type { Hero } from "core/src/types/Hero.js";
import type { Appellation } from "core/src/types/Appellation.js";
import type { Money } from "core/src/types/Money.js";
import type { Level } from "core/src/types/Level.js";
import type { Health } from "core/src/types/Health.js";
import type { Combat } from "core/src/types/Combat.js";
import type { Phase } from "core/src/types/Phase.js";
import type { DateTime } from "core/src/types/DateTime.js";
import { Entity, PrimaryKey, Property, Unique } from "@mikro-orm/core";

@Entity()
class Game {
	@PrimaryKey()
	playsig: Playsig;

	@Property({ type: "json" })
	publicKeys: PublicKey[];

	@Property({ type: "json" })
	nicknames: Record<PublicKey, string>;

	@Property({ type: "json" })
	playerHeroes: Record<PublicKey, Hero[]>;

	@Property({ type: "json" })
	playerBenches: Record<PublicKey, Record<number, Hero>>;

	@Property({ type: "json" })
	playerShops: Record<PublicKey, Appellation[]>;

	@Property({ type: "json" })
	playerMoney: Record<PublicKey, Money>;

	@Property({ type: "json" })
	playerLevel: Record<PublicKey, Level>;

	@Property({ type: "json" })
	playerHealths: Record<PublicKey, Health>;

	@Property({ type: "json", nullable: true })
	combats?: Combat[];

	@Property({ type: "json", nullable: true })
	previousCombats?: Combat[];

	@Property({ type: "json" })
	playerLostAt: Record<PublicKey, DateTime>;

	@Property()
	phase: Phase;

	@Property()
	phaseStartAt: DateTime;
}

export const GameEntity = Game;

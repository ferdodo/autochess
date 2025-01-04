import type { Playsig } from "core/types/playsig.js";
import type { PublicKey } from "core/types/public-key.js";
import type { Hero } from "core/types/hero.js";
import type { Appellation } from "core/types/appellation.js";
import type { Money } from "core/types/money.js";
import type { Level } from "core/types/level.js";
import type { Health } from "core/types/health.js";
import type { Combat } from "core/types/combat.js";
import type { Phase } from "core/types/phase.js";
import type { DateTime } from "core/types/date-time.js";
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

	@Property({ type: "json" })
	playerLostAt: Record<PublicKey, DateTime>;

	@Property()
	phase: Phase;

	@Property()
	phaseStartAt: DateTime;
}

export const GameEntity = Game;

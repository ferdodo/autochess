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
	_id: string;

	@Property()
	@Unique()
	playsig: Playsig;

	@Property()
	publicKeys: PublicKey[];

	@Property()
	nicknames: Record<PublicKey, string>;

	@Property()
	playerHeroes: Record<PublicKey, Hero[]>;

	@Property()
	playerBenches: Record<PublicKey, Record<number, Hero>>;

	@Property()
	playerShops: Record<PublicKey, Appellation[]>;

	@Property()
	playerMoney: Record<PublicKey, Money>;

	@Property()
	playerLevel: Record<PublicKey, Level>;

	@Property()
	playerHealths: Record<PublicKey, Health>;

	@Property({ nullable: true })
	combats?: Combat[];

	@Property()
	phase: Phase;

	@Property()
	phaseStartAt: DateTime;
}

export const GameEntity = Game;

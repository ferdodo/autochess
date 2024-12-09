import type { Playsig } from "core/types/playsig";
import type { PublicKey } from "core/types/public-key";
import type { Hero } from "core/types/hero";
import type { Appellation } from "core/types/appellation";
import type { Money } from "core/types/money";
import type { Level } from "core/types/level";
import type { Health } from "core/types/health";
import type { Combat } from "core/types/combat";
import type { Phase } from "core/types/phase";
import type { DateTime } from "core/types/date-time";
import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
class Game {
	@PrimaryKey()
	_id: string;

	@Property()
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

	@Property()
	combats?: Combat[];

	@Property()
	phase: Phase;

	@Property()
	phaseStartAt: DateTime;
}

export const GameEntity = Game;

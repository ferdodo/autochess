import type { PublicKey } from "./PublicKey.js";
import type { Hero } from "./Hero.js";
import type { Appellation } from "./Appellation.js";
import type { Playsig } from "./Playsig.js";
import type { Phase } from "./Phase.js";
import type { Level } from "./Level.js";
import type { Combat } from "./Combat.js";
import type { Health } from "./Health.js";
import type { Money } from "./Money.js";
import type { DateTime } from "./DateTime.js";

export interface Game {
	playsig: Playsig;
	publicKeys: PublicKey[];
	nicknames: Record<PublicKey, string>;
	playerHeroes: Record<PublicKey, Hero[]>;
	playerBenches: Record<PublicKey, Record<number, Hero>>;
	playerShops: Record<PublicKey, Appellation[]>;
	playerMoney: Record<PublicKey, Money>;
	playerLevel: Record<PublicKey, Level>;
	playerHealths: Record<PublicKey, Health>;
	playerLostAt: Record<PublicKey, DateTime>;
	combats?: Combat[];
	previousCombats?: Combat[];
	phase: Phase;
	phaseStartAt: DateTime;
}

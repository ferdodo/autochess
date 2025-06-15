import type { PublicKey } from "core/src/types/PublicKey.js";
import type { Nickname } from "core/src/types/Nickname.js";
import type { DateTime } from "core/src/types/DateTime.js";
import { Entity, PrimaryKey, Property, Unique } from "@mikro-orm/core";

@Entity()
class Queuer {
	@PrimaryKey()
	publicKey: PublicKey;

	@Property()
	nickname: Nickname;

	@Property()
	createdAt: DateTime;
}

export const QueuerEntity = Queuer;

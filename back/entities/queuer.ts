import type { PublicKey } from "core/types/public-key.js";
import type { Nickname } from "core/types/nickname.js";
import type { DateTime } from "core/types/date-time.js";
import { Entity, PrimaryKey, Property, Unique } from "@mikro-orm/core";

@Entity()
class Queuer {
	@PrimaryKey()
	_id;

	@Property()
	@Unique()
	publicKey: PublicKey;

	@Property()
	nickname: Nickname;

	@Property()
	createdAt: DateTime;
}

export const QueuerEntity = Queuer;

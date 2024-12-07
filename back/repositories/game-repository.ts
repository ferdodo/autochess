import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import type { Repository, DataSource } from "typeorm";
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
import type { Game as GameType } from "core/types/game";
import type { Collection } from "mongodb";
import type { MongoDriver } from "typeorm/driver/mongodb/MongoDriver";

@Entity()
class Game {
	@PrimaryGeneratedColumn()
	playsig: Playsig;

	@Column()
	publicKeys: PublicKey[];

	@Column()
	nicknames: Record<PublicKey, string>;

	@Column()
	playerHeroes: Record<PublicKey, Hero[]>;

	@Column()
	playerBenches: Record<PublicKey, Record<number, Hero>>;

	@Column()
	playerShops: Record<PublicKey, Appellation[]>;

	@Column()
	playerMoney: Record<PublicKey, Money>;

	@Column()
	playerLevel: Record<PublicKey, Level>;

	@Column()
	playerHealths: Record<PublicKey, Health>;

	@Column()
	combats?: Combat[];

	@Column()
	phase: Phase;

	@Column()
	phaseStartAt: DateTime;
}

export type GameRepository = Repository<Game>;

export function getGameRepository(dataSource: DataSource): Repository<Game> {
	return dataSource.getRepository(Game);
}

export function getGameCollection(
	dataSource: DataSource,
): Collection<GameType> {
	const gameRepository = dataSource.getMongoRepository(Game);
	const mongoDriver = gameRepository.manager.connection.driver as MongoDriver;

	return mongoDriver.mongodb.MongoClient.getCollection(
		gameRepository.metadata.targetName,
	);
}

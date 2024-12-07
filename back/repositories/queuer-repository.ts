import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import type { Repository, DataSource } from "typeorm";
import type { PublicKey } from "core/types/public-key";
import type { Nickname } from "core/types/nickname";
import type { DateTime } from "core/types/date-time";
import type { Queuer as QueuerType } from "core/types/queuer";
import type { Collection } from "mongodb";
import type { MongoDriver } from "typeorm/driver/mongodb/MongoDriver";

@Entity()
class Queuer {
	@PrimaryGeneratedColumn()
	publicKey: PublicKey;

	@Column()
	nickname: Nickname;

	@Column()
	createdAt: DateTime;
}

export type QueuerRepository = Repository<Queuer>;

export function getQueuerRepository(
	dataSource: DataSource,
): Repository<Queuer> {
	return dataSource.getRepository(Queuer);
}

export function getQueuerMongoRepository(
	dataSource: DataSource,
): Repository<Queuer> {
	return dataSource.getMongoRepository(Queuer);
}

export function getQueuerCollection(
	dataSource: DataSource,
): Collection<QueuerType> {
	const queuerRepository = dataSource.getMongoRepository(Queuer);
	const mongoDriver = queuerRepository.manager.connection.driver as MongoDriver;

	return mongoDriver.mongodb.MongoClient.getCollection(
		queuerRepository.metadata.targetName,
	);
}

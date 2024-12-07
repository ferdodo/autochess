import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import type { Repository, DataSource } from "typeorm";
import type { Playsig } from "core/types/playsig";
import type { Pool as PoolType } from "core/types/pool";

@Entity()
class Pool {
	@PrimaryGeneratedColumn()
	playsig: Playsig;

	@Column()
	heroes: PoolType["heroes"];
}

export type PoolRepository = Repository<Pool>;

export function getPoolRepository(dataSource: DataSource): Repository<Pool> {
	return dataSource.getRepository(Pool);
}

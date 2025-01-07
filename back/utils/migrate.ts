import type { MikroORM } from "@mikro-orm/core";

export async function migrate(orm: MikroORM) {
	try {
		const migrator = orm.getMigrator();
		await migrator.up();
	} catch (error) {
		if (
			error.message.includes("create table") &&
			(error.message.includes("duplicate key value") ||
				error.message.includes("already exists"))
		) {
			return;
		}
		throw error;
	}
}

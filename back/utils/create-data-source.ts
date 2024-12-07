import { DataSource } from "typeorm";

export function createDatasource(): DataSource {
	return new DataSource({
		type: "mongodb",
		host: "database",
		port: 27017,
		username: "test",
		password: "test",
		database: "test",
	});
}

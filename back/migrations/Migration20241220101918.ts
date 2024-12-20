import { Migration } from "@mikro-orm/migrations";

export class Migration20241220101918 extends Migration {
	override async up(): Promise<void> {
		this.addSql(
			`create table "game" ("playsig" varchar(255) not null, "public_keys" jsonb not null, "nicknames" jsonb not null, "player_heroes" jsonb not null, "player_benches" jsonb not null, "player_shops" jsonb not null, "player_money" jsonb not null, "player_level" jsonb not null, "player_healths" jsonb not null, "combats" jsonb null, "phase" varchar(255) not null, "phase_start_at" varchar(255) not null, constraint "game_pkey" primary key ("playsig"));`,
		);

		this.addSql(
			`create table "pool" ("playsig" varchar(255) not null, "heroes" jsonb not null, constraint "pool_pkey" primary key ("playsig"));`,
		);

		this.addSql(
			`create table "queuer" ("public_key" varchar(255) not null, "nickname" varchar(255) not null, "created_at" varchar(255) not null, constraint "queuer_pkey" primary key ("public_key"));`,
		);
	}
}

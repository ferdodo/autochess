import { Migration } from "@mikro-orm/migrations";

export class Migration20250104062042 extends Migration {
	override async up(): Promise<void> {
		this.addSql(
			`create table "encounter" ("playsig" varchar(255) not null, "winner_public_key" varchar(255) not null, "loser_public_key" varchar(255) not null, "created_at" varchar(255) not null, constraint "encounter_pkey" primary key ("playsig"));`,
		);

		this.addSql(
			`create table "ranking" ("public_key" varchar(255) not null, "elo" int not null, constraint "ranking_pkey" primary key ("public_key"));`,
		);

		this.addSql(
			`alter table "game" add column "player_lost_at" jsonb not null;`,
		);
	}

	override async down(): Promise<void> {
		this.addSql(`drop table if exists "encounter" cascade;`);

		this.addSql(`drop table if exists "ranking" cascade;`);

		this.addSql(`alter table "game" drop column "player_lost_at";`);
	}
}

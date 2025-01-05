import { Migration } from "@mikro-orm/migrations";

export class Migration20250105173405 extends Migration {
	override async up(): Promise<void> {
		this.addSql(`alter table "encounter" drop constraint "encounter_pkey";`);

		this.addSql(
			`alter table "encounter" add constraint "encounter_pkey" primary key ("playsig", "winner_public_key", "loser_public_key");`,
		);
	}

	override async down(): Promise<void> {
		this.addSql(`alter table "encounter" drop constraint "encounter_pkey";`);

		this.addSql(
			`alter table "encounter" add constraint "encounter_pkey" primary key ("playsig");`,
		);
	}
}

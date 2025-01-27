import { Migration } from "@mikro-orm/migrations";

export class Migration20250127100628 extends Migration {
	override async up(): Promise<void> {
		this.addSql(
			`alter table "encounter" add constraint encounter_check check(winner_public_key != loser_public_key);`,
		);
	}

	override async down(): Promise<void> {
		this.addSql(`alter table "encounter" drop constraint encounter_check;`);
	}
}

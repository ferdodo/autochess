import { Migration } from "@mikro-orm/migrations";

export class Migration20250131073610 extends Migration {
	override async up(): Promise<void> {
		this.addSql(`alter table "game" add column "previous_combats" jsonb null;`);
	}

	override async down(): Promise<void> {
		this.addSql(`alter table "game" drop column "previous_combats";`);
	}
}

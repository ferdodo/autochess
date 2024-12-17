// @ts-ignore
import humanhash from "humanhash";

export function humanReadable(complexId: string): string {
	// @ts-ignore
	const splitted = new humanhash().humanize(complexId).split("-");
	return `${splitted[0]}-${splitted[1]}`;
}

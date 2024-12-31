import type { FrontContext } from "../types/front-context.js";
import { filter, map } from "rxjs";
import type { Observable } from "rxjs";

export function observeServerNotifications(
	frontContext: FrontContext,
): Observable<string> {
	return frontContext.connection.messages$.pipe(
		map((message) => message.serverNotification),
		filter((notification) => notification !== undefined),
	);
}

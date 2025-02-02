import type { FrontContext } from "../types/front-context.js";
import { filter, map } from "rxjs";
import type { Observable } from "rxjs";
import type { ServerNotification } from "../types/server-notifications.js";

export function observeServerNotifications(
	frontContext: FrontContext,
): Observable<ServerNotification> {
	return frontContext.connection.messages$.pipe(
		map((message) => message.serverNotification),
		filter((notification) => notification !== undefined),
	);
}

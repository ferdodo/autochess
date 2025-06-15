import { filter, map } from "rxjs";
import type { Observable } from "rxjs";
import type { FrontContext } from "../types/FrontContext.js";
import type { ServerNotification } from "../types/ServerNotification.js";

export function observeServerNotifications(
	frontContext: FrontContext,
): Observable<ServerNotification> {
	return frontContext.connection.messages$.pipe(
		map((message) => message.serverNotification),
		filter((notification) => notification !== undefined),
	);
}

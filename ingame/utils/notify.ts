import { getNotificationSpan } from "./get-notification-span";

export function notify(message: string) {
	const notificationSpan = getNotificationSpan();
	notificationSpan.innerHTML = message;
}

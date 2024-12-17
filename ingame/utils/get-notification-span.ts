export function getNotificationSpan() {
	let notificationSpan = document.getElementById("autochess-notification-span");

	if (!notificationSpan) {
		notificationSpan = document.createElement("span");
		notificationSpan.id = "autochess-notification-span";
		notificationSpan.style.position = "absolute";
		notificationSpan.style.top = "50%";
		notificationSpan.style.left = "50%";
		notificationSpan.style.transform = "translate(-50%, -50%)";
		notificationSpan.style.fontSize = "2em";
		document.body.appendChild(notificationSpan);
	}

	return notificationSpan;
}

let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", (e: MouseEvent) => {
	mouseX = e.clientX;
	mouseY = e.clientY;
});

document.addEventListener(
	"touchmove",
	(event) => {
		event.preventDefault();
		const touch = event.touches[0];
		mouseX = touch.clientX;
		mouseY = touch.clientY;
	},
	false,
);

export function logEvent(eventText: string) {
	const eventElement = document.createElement("div");
	eventElement.textContent = eventText;

	eventElement.style.cssText = `
		position: fixed;
		color: red;
		font-size: 16px;
		pointer-events: none;
		transition: opacity 2s, transform 2s;
		z-index: 9999;
		left: ${mouseX}px;
		top: ${mouseY - 20}px;
	`;

	document.body.appendChild(eventElement);

	setTimeout(() => {
		eventElement.style.opacity = "0";
		eventElement.style.transform = "translateY(-50px)";

		setTimeout(() => {
			document.body.removeChild(eventElement);
		}, 2000);
	}, 100);
}

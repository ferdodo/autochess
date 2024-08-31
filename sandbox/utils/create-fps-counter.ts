import { GUI } from "dat.gui";
import { observeFps } from "core/utils/observe-fps";

export function createFpsCounter() {
	const stats = { fps: 0 };

	observeFps().subscribe((value) => {
		stats.fps = value;
	});

	const gui = new GUI();
	gui.add(stats, "fps").listen();
}

import { createRenderer } from "interface/utils/create-renderer";
import { observeWindowDimentions } from "core/utils/observe-window-dimentions";
import { createContext } from "interface/utils/create-context";
import { DisplayFactory } from "./utils/display-factory";
import type { Display } from "core/types/display";
import { waitTextureLoaded } from "interface/utils/load-texture";
import { render } from "interface/utils/render";
import { createFpsCounter } from "./utils/create-fps-counter";
import { observeInteractions } from "interface/utils/observe-interactions";
import { logEvent } from "./utils/log-event";
import type { Interaction } from "core/types/interaction";
import { createCamera } from "interface/utils/create-camera";
import { removeRenderer } from "interface/utils/remove-renderer";

document.addEventListener("contextmenu", (e) => {
	e.preventDefault();
});

waitTextureLoaded
	.then(createContext)
	.then((threeContext) => {
		observeWindowDimentions().subscribe(() => {
			threeContext.camera = createCamera();
			removeRenderer(threeContext.renderer);

			threeContext.renderer = createRenderer(
				threeContext.camera,
				threeContext.scene,
			);
		});

		const displayFactory = new DisplayFactory(threeContext)
			.addPiece()
			.addPiece()
			.addPiece()
			.addPiece()
			.addPiece()
			.addPiece()
			.addPiece()
			.addPiece()
			.addPiece()
			.addPiece()
			.addPiece()
			.addPiece()
			.addPiece()
			.addPiece()
			.addPiece();

		displayFactory.subscribe({
			next(display: Display) {
				render(threeContext, display);
			},
		});

		observeInteractions(threeContext).subscribe((interaction: Interaction) => {
			logEvent(JSON.stringify(interaction));

			if (interaction.clickFullscreen) {
				if (document.fullscreenElement) {
					document.exitFullscreen();
				} else {
					document.body.requestFullscreen();
				}
			}
		});

		createFpsCounter(threeContext).catch(console.error);
	})
	.catch(console.error);

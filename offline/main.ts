import { createRenderer } from "interface/utils/create-renderer";
import { observeWindowDimentions } from "core/utils/observe-window-dimentions";
import { createContext } from "interface/utils/create-context";
import { waitTextureLoaded } from "interface/utils/load-texture";
import { createCamera } from "interface/utils/create-camera";
import { removeRenderer } from "interface/utils/remove-renderer";
// import { render } from "interface/utils/render";

document.addEventListener("contextmenu", (e) => {
	e.preventDefault();
});

waitTextureLoaded
	.then(() => {
		const threeContext = createContext();

		observeWindowDimentions().subscribe(() => {
			threeContext.camera = createCamera();
			removeRenderer(threeContext.renderer);

			threeContext.renderer = createRenderer(
				threeContext.camera,
				threeContext.scene,
			);
		});
	})
	.catch(console.error);

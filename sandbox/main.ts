import { startWith, pairwise, tap } from "rxjs";
import { mapRenderer } from "core/utils/map-renderer";
import { observeWindowDimentions } from "core/utils/observe-window-dimentions";
import { getWindowDimentions } from "core/utils/get-window-dimentions";
import { removeRenderer } from "core/utils/remove-renderer";
import { createContext } from "core/utils/create-context";
import { DisplayFactory } from "./utils/display-factory";
import type { Display } from "core/types/display";
import { waitTextureLoaded } from "core/utils/load-texture";
import { render } from "core/utils/render";
import { createFpsCounter } from "./utils/create-fps-counter";

waitTextureLoaded
	.then(() => {
		const context = createContext();

		observeWindowDimentions()
			.pipe(
				startWith(getWindowDimentions()),
				mapRenderer(context),
				pairwise(),
				tap(([oldRenderer]) => removeRenderer(oldRenderer)),
			)
			.subscribe();

		new DisplayFactory()
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
			.addPiece()
			.subscribe({
				next(display: Display) {
					render(context, display);
				},
			});

		createFpsCounter();
	})
	.catch(console.error);

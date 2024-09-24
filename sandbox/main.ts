import { startWith, pairwise, tap } from "rxjs";
import { mapRenderer } from "interface/utils/map-renderer";
import { observeWindowDimentions } from "core/utils/observe-window-dimentions";
import { getWindowDimentions } from "core/utils/get-window-dimentions";
import { removeRenderer } from "interface/utils/remove-renderer";
import { createContext } from "interface/utils/create-context";
import { DisplayFactory } from "./utils/display-factory";
import type { Display } from "core/types/display";
import { waitTextureLoaded } from "interface/utils/load-texture";
import { render } from "interface/utils/render";
import { createFpsCounter } from "./utils/create-fps-counter";
import { observeInteractions } from "interface/utils/observe-interactions";
import { logEvent } from "./utils/log-event";
import type { Subscription } from "rxjs";
import type { Interaction } from "core/types/interaction";

let oldSubscription: Subscription | undefined;

waitTextureLoaded
	.then(() => {
		const threeContext = createContext();

		observeWindowDimentions()
			.pipe(
				startWith(getWindowDimentions()),
				mapRenderer(threeContext),
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
					const old = oldSubscription;

					oldSubscription = observeInteractions(
						threeContext,
						display,
					).subscribe((interaction: Interaction) => {
						logEvent(JSON.stringify(interaction));
					});

					if (old) {
						old.unsubscribe();
					}

					render(threeContext, display);
				},
			});

		createFpsCounter().catch(console.error);
	})
	.catch(console.error);

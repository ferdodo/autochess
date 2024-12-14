import { createRenderer } from "interface/utils/create-renderer";
import { observeWindowDimentions } from "core/utils/observe-window-dimentions";
import { createContext } from "interface/utils/create-context";
import { waitTextureLoaded } from "interface/utils/load-texture";
import { createCamera } from "interface/utils/create-camera";
import { removeRenderer } from "interface/utils/remove-renderer";
import { render } from "interface/utils/render";
import type { FrontContext } from "core/types/front-context";
import { initiateGame } from "core/api/initiate-game";
import { observeGame } from "core/api/observe-game";
import { portray } from "interface/utils/portray";
import { cast } from "core/utils/cast";
import { observeInteractions } from "interface/utils/observe-interactions";
import { observeInteractionHistory } from "core/utils/observe-interaction-history";
import { createWsClient } from "./utils/create-ws-client";
import { createRandomPublicKey } from "core/mocks/create-random-public-key";
import { switchMap } from "rxjs/operators";

document.addEventListener("contextmenu", (e) => {
	e.preventDefault();
});

waitTextureLoaded
	.then(async () => {
		window.document.body.innerHTML = "Connecting to servers...";

		const connection = await createWsClient(
			import.meta.env.VITE_WEBSOCKET_PROTOCOL,
			import.meta.env.VITE_WEBSOCKET_PORT,
			import.meta.env.VITE_BACK_DOMAIN,
		).catch((err) => {
			window.document.body.innerHTML = "Connection closed.";
			throw err;
		});

		window.document.body.innerHTML = "Matchmaking...";

		connection.messages$.subscribe({
			complete: () => {
				window.document.body.innerHTML = "Connection lost !";
			},
		});

		const frontContext1: FrontContext = {
			connection,
			publicKey: createRandomPublicKey(),
			nickname: "playerone",
			signMessage: async (message) => ({
				...message,
				publicKey: frontContext1.publicKey,
				issuedAt: new Date().toISOString(),
				expiresAt: new Date(Date.now() + 60000).toISOString(),
				signature:
					"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
			}),
		};

		const [initiateGameResponse1] = await Promise.all([
			initiateGame(frontContext1),
		]);

		const threeContext1 = createContext();

		window.document.body.innerHTML = "";

		connection.messages$
			.pipe(switchMap(() => observeWindowDimentions()))
			.subscribe(() => {
				threeContext1.camera = createCamera();
				removeRenderer(threeContext1.renderer);

				threeContext1.renderer = createRenderer(
					threeContext1.camera,
					threeContext1.scene,
				);
			});

		frontContext1.playsig = initiateGameResponse1.playsig;
		frontContext1.stamp = initiateGameResponse1.stamp;

		observeInteractions(threeContext1)
			.pipe(observeInteractionHistory())
			.subscribe((interactions) => {
				cast(frontContext1, interactions);
			});

		observeGame(frontContext1)
			.pipe(portray(frontContext1.publicKey, threeContext1))
			.subscribe((display) => {
				render(threeContext1, display);
			});
	})
	.catch(console.error);

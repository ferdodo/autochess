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
import { switchMap } from "rxjs/operators";
import { sign } from "./utils/sign";
import { createKeyPair } from "./utils/create-key-pair";
import { notify } from "./utils/notify";
import { pickBackend } from "./utils/pick-backend";

document.addEventListener("contextmenu", (e) => {
	e.preventDefault();
});

waitTextureLoaded
	.then(async () => {
		notify("Connecting to servers...");
		const [publicKey, privateKey] = await createKeyPair();
		const [domain, port] = pickBackend();

		const connection = await createWsClient(
			import.meta.env.VITE_WEBSOCKET_PROTOCOL,
			port,
			domain,
		).catch((err) => {
			notify("Connection failed.");
			throw err;
		});

		notify("Matchmaking...");

		connection.messages$.subscribe({
			complete: () => {
				notify("Connection lost !");
			},
		});

		const frontContext1: FrontContext = {
			connection,
			publicKey,
			nickname: "playerone",
			signMessage: (message) => sign(publicKey, privateKey, message),
		};

		const [initiateGameResponse1] = await Promise.all([
			initiateGame(frontContext1),
		]);

		frontContext1.playsig = initiateGameResponse1.playsig;
		frontContext1.stamp = initiateGameResponse1.stamp;
		const threeContext1 = createContext();

		notify("");

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

		observeGame(frontContext1)
			.pipe(portray(frontContext1.publicKey, threeContext1))
			.subscribe((display) => {
				render(threeContext1, display);
			});

		observeInteractions(threeContext1)
			.pipe(observeInteractionHistory())
			.subscribe((interactions) => {
				cast(frontContext1, interactions);
			});
	})
	.catch((err) => {
		console.error(err);
		notify("An error occured.");
	});

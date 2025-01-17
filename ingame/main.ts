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
import { toggleFullscreen } from "./utils/toggle-fullscreen";
import { filter, map } from "rxjs/operators";
import { doubleClick$ } from "./utils/double-click";
import { connectBot } from "core/utils/connect-bot";
import { take } from "rxjs/operators";
import { lastValueFrom } from "rxjs";
import type { Subscription } from "rxjs";

document.addEventListener("contextmenu", (e) => {
	e.preventDefault();
});

async function main() {
	let keySubscription: Subscription | undefined;

	try {
		await waitTextureLoaded;
		notify("Connecting to servers...");
		const [publicKey, privateKey] = await createKeyPair();
		const connection = await createWsClient();

		notify("Matchmaking... Double click to play with bots");

		const frontContext1: FrontContext = {
			connection,
			publicKey,
			nickname: "playerone",
			signMessage: (message) => sign(publicKey, privateKey, message),
		};

		let botCount = 0;

		keySubscription = doubleClick$.subscribe(async () => {
			botCount++;
			notify(
				`${botCount} Bots were created, double click to add more. please wait for matchmaking...`,
			);

			const [botPublicKey, botPrivateKey] = await createKeyPair();

			const frontContext: FrontContext = {
				connection,
				publicKey: botPublicKey,
				nickname: `bot-${Math.floor(Math.random() * 1000)}`,
				signMessage: <T>(message: T) =>
					sign(botPublicKey, botPrivateKey, message),
			};

			await connectBot(frontContext);
		});

		const initiateGameResponse = await initiateGame(frontContext1);
		keySubscription.unsubscribe();
		frontContext1.playsig = initiateGameResponse.playsig;
		frontContext1.stamp = initiateGameResponse.stamp;
		const threeContext1 = await createContext();
		notify("");

		connection.messages$
			.pipe(
				take(1),
				switchMap(() => observeWindowDimentions()),
			)
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

		observeInteractions(threeContext1)
			.pipe(
				map((i) => i.clickFullscreen),
				filter(Boolean),
			)
			.subscribe(toggleFullscreen);

		await lastValueFrom(connection.messages$);
		removeRenderer(threeContext1.renderer);
		throw new Error("Connection closed !");
	} catch (err) {
		keySubscription?.unsubscribe();

		if (err instanceof Error && err.message.includes("Connection closed !")) {
			notify("Connection closed ! Reconnecting in 5 seconds...");
			await new Promise((resolve) => setTimeout(resolve, 5000));
			await main();
		} else {
			console.error(err);
			notify("An error occured.");
		}
	}
}

main();

import { createRenderer } from "interface/utils/createRenderer";
import { observeWindowDimentions } from "core/src/utils/observeWindowDimentions";
import { createContext } from "interface/utils/createContext";
import { waitTextureLoaded } from "interface/utils/waitTextureLoaded";
import { createCamera } from "interface/utils/createCamera";
import { removeRenderer } from "interface/utils/removeRenderer";
import { render } from "interface/utils/render";
import { PlayerSwitch } from "./utils/player-switch";
import { createOfflineBackContext } from "./utils/create-offline-back-context";
import { ConnectionMockFactory } from "core/src/mocks/ConnectionMockFactory";
import { startServer } from "core/src/utils/startServer";
import type { FrontContext } from "core/src/types/FrontContext";
import { initiateGame } from "core/src/api/initiateGame";
import { observeGame } from "core/src/api/observeGame";
import { portray } from "interface/utils/portray";
import { cast } from "core/src/utils/cast";
import { observeInteractions } from "interface/utils/observeInteractions";
import { observeInteractionHistory } from "core/src/utils/observeInteractionHistory";
import { logBench } from "./utils/log-bench";
import { connectBot } from "core/src/utils/connectBot";

document.addEventListener("contextmenu", (e) => {
	e.preventDefault();
});

waitTextureLoaded
	.then(async () => {
		const playerSwitch = new PlayerSwitch();
		const connectionMockFactory = new ConnectionMockFactory();
		const backContext = createOfflineBackContext(connectionMockFactory);
		startServer(backContext).subscribe();

		const frontContext1: FrontContext = {
			connection: connectionMockFactory.createClient()[0],
			publicKey:
				"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
			nickname: "playerone",
			signMessage: async (message) => ({
				...message,
				publicKey: frontContext1.publicKey,
				issuedAt: new Date().toISOString(),
				expiresAt: new Date(Date.now() + 60000).toISOString(),
				signature:
					"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
			}),
		};

		const frontContext2: FrontContext = {
			connection: connectionMockFactory.createClient()[0],
			publicKey:
				"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab",
			nickname: "bot",
			signMessage: async (message) => ({
				...message,
				publicKey: frontContext2.publicKey,
				issuedAt: new Date().toISOString(),
				expiresAt: new Date(Date.now() + 60000).toISOString(),
				signature:
					"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab",
			}),
		};

		let currentPlayer = 0;

		playerSwitch.observeCurrentPlayer().subscribe((value) => {
			currentPlayer = value;
		});

		const threeContext1 = await createContext();
		const threeContext2 = await createContext();

		playerSwitch.switchPlayer1();

		observeWindowDimentions().subscribe(() => {
			threeContext1.camera = createCamera();
			threeContext2.camera = createCamera();
			removeRenderer(threeContext1.renderer);
			removeRenderer(threeContext2.renderer);

			threeContext1.renderer = createRenderer(
				threeContext1.camera,
				threeContext1.scene,
			);

			threeContext2.renderer = createRenderer(
				threeContext2.camera,
				threeContext2.scene,
			);

			playerSwitch.switchPlayer(currentPlayer);
		});

		const [initiateGameResponse1, botPlayerContext] = await Promise.all([
			initiateGame(frontContext1),
			connectBot(frontContext2, 250),
		]);

		frontContext1.playsig = initiateGameResponse1.playsig;
		frontContext1.stamp = initiateGameResponse1.stamp;

		logBench(frontContext1);

		observeInteractions(threeContext1)
			.pipe(observeInteractionHistory())
			.subscribe((interactions) => {
				if (currentPlayer === 0) {
					cast(frontContext1, interactions);
				}
			});

		observeInteractions(threeContext2)
			.pipe(observeInteractionHistory())
			.subscribe((interactions) => {
				if (currentPlayer === 1) {
					cast(botPlayerContext, interactions);
				}
			});

		observeGame(frontContext1)
			.pipe(portray(frontContext1.publicKey, threeContext1))
			.subscribe((display) => {
				render(threeContext1, display);
			});

		observeGame(frontContext2)
			.pipe(portray(frontContext2.publicKey, threeContext2))
			.subscribe((display) => {
				render(threeContext2, display);
			});
	})
	.catch(console.error);

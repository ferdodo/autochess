import { createContext } from "interface/utils/createContext";
import { waitTextureLoaded } from "interface/utils/waitTextureLoaded";
import { render } from "interface/utils/render";
import { PlayerSwitch } from "./utils/PlayerSwitch";
import { createOfflineBackContext } from "./utils/createOfflineBackContext";
import { ConnectionMockFactory } from "core/src/mocks/ConnectionMockFactory";
import { startServer } from "core/src/utils/startServer";
import type { FrontContext } from "core/src/types/FrontContext";
import { initiateGame } from "core/src/api/initiateGame";
import { observeGame } from "core/src/api/observeGame";
import { portray } from "interface/utils/portray";
import { cast } from "core/src/utils/cast";
import { observeInteractions } from "interface/utils/observeInteractions";
import { observeInteractionHistory } from "core/src/utils/observeInteractionHistory";
import { logBench } from "./utils/logBench";
import { connectBot } from "core/src/utils/connectBot";
import { GuiManager } from "./utils/GuiManager";
import type { Display } from "core/src/types/Display";
import { observeGuiViewDisplay } from "./utils/observeGuiViewDisplay";
import { delayWhen } from "rxjs";
import { frameObservable } from "interface/utils/frameObservable";

document.addEventListener("contextmenu", (e) => {
	e.preventDefault();
});

waitTextureLoaded
	.then(async () => {
		const guiManager = new GuiManager();
		const playerSwitch = new PlayerSwitch(guiManager);
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
			.pipe(
				portray(
					frontContext1.publicKey,
					threeContext1,
					observeGuiViewDisplay(guiManager.cameraOverride$),
				),
			)
			.subscribe((display: Display) => {
				render(threeContext1, display);
			});

		observeGame(frontContext2)
			.pipe(
				portray(
					frontContext2.publicKey,
					threeContext2,
					observeGuiViewDisplay(guiManager.cameraOverride$).pipe(
						delayWhen(() => frameObservable),
					),
				),
			)
			.subscribe((display: Display) => {
				render(threeContext2, display);
			});
	})
	.catch(console.error);

import { createRenderer } from "interface/utils/create-renderer";
import { observeWindowDimentions } from "core/utils/observe-window-dimentions";
import { createContext } from "interface/utils/create-context";
import { waitTextureLoaded } from "interface/utils/load-texture";
import { createCamera } from "interface/utils/create-camera";
import { removeRenderer } from "interface/utils/remove-renderer";
// import { render } from "interface/utils/render";
import { PlayerSwitch } from "./utils/player-switch";
import { createOfflineBackContext } from "./utils/create-offline-back-context";
import { ConnectionMockFactory } from "core/mocks/connection-mock-factory";
import { startServer } from "core/utils/start-server";
import type { FrontContext } from "core/types/front-context";
import { initiateGame } from "core/api/initiate-game";
import { observeGame } from "core/api/observe-game";
import { portray } from "core/utils/portray";

document.addEventListener("contextmenu", (e) => {
	e.preventDefault();
});

waitTextureLoaded
	.then(() => {
		const playerSwitch = new PlayerSwitch();
		const connectionMockFactory = new ConnectionMockFactory();
		const backContext = createOfflineBackContext(connectionMockFactory);

		startServer(backContext);

		const frontContext1: FrontContext = {
			connection: connectionMockFactory.createClient()[0],
			publicKey:
				"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
			nickname: "playerone",
			signMessage: async (message) => ({
				...message,
				timestamp: Date.now(),
				signature:
					"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
			}),
		};

		const frontContext2: FrontContext = {
			connection: connectionMockFactory.createClient()[0],
			publicKey:
				"bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
			nickname: "playertwo",
			signMessage: async (message) => ({
				...message,
				timestamp: Date.now(),
				signature:
					"bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
			}),
		};

		Promise.all([initiateGame(frontContext1), initiateGame(frontContext2)])
			.then(([game1, game2]) => {
				frontContext1.playsig = game1.playsig;
				frontContext2.playsig = game2.playsig;
				console.log("game1", game1);
				console.log("game2", game2);
			})
			.then(() => {
				observeGame(frontContext1)
					.pipe(portray(frontContext1.publicKey))
					.subscribe((game) => {
						console.log("game1", game);
					});
			})
			.catch(console.error);

		let currentPlayer = 0;

		playerSwitch.observeCurrentPlayer().subscribe((value) => {
			currentPlayer = value;
		});

		const threeContext1 = createContext();
		const threeContext2 = createContext();
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
	})
	.catch(console.error);

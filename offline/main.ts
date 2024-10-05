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

document.addEventListener("contextmenu", (e) => {
	e.preventDefault();
});

waitTextureLoaded
	.then(() => {
		const playerSwitch = new PlayerSwitch();
		const connectionMockFactory = new ConnectionMockFactory();
		const backContext = createOfflineBackContext(connectionMockFactory);
		startServer(backContext);
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

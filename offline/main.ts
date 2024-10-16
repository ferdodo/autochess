import { createRenderer } from "interface/utils/create-renderer";
import { observeWindowDimentions } from "core/utils/observe-window-dimentions";
import { createContext } from "interface/utils/create-context";
import { waitTextureLoaded } from "interface/utils/load-texture";
import { createCamera } from "interface/utils/create-camera";
import { removeRenderer } from "interface/utils/remove-renderer";
import { render } from "interface/utils/render";
import { PlayerSwitch } from "./utils/player-switch";
import { createOfflineBackContext } from "./utils/create-offline-back-context";
import { ConnectionMockFactory } from "core/mocks/connection-mock-factory";
import { startServer } from "core/utils/start-server";
import type { FrontContext } from "core/types/front-context";
import { initiateGame } from "core/api/initiate-game";
import { observeGame } from "core/api/observe-game";
import { portray } from "core/utils/portray";
import { cast } from "core/utils/cast";
import { observeInteractions } from "interface/utils/observe-interactions";
import { firstValueFrom, of } from "rxjs";

document.addEventListener("contextmenu", (e) => {
	e.preventDefault();
});

waitTextureLoaded
	.then(async () => {
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

		const [initiateGameResponse1, initiateGameResponse2] = await Promise.all([
			initiateGame(frontContext1),
			initiateGame(frontContext2),
		]);

		frontContext1.playsig = initiateGameResponse1.playsig;
		frontContext2.playsig = initiateGameResponse2.playsig;
		const initialGame1 = await firstValueFrom(observeGame(frontContext1));
		const initialGame2 = await firstValueFrom(observeGame(frontContext2));

		const initialDisplay1 = await firstValueFrom(
			of(initialGame1).pipe(portray(frontContext1.publicKey)),
		);

		const initialDisplay2 = await firstValueFrom(
			of(initialGame2).pipe(portray(frontContext2.publicKey)),
		);

		observeInteractions(threeContext1, initialDisplay1).subscribe(
			(interaction) => {
				if (currentPlayer === 0) {
					cast(frontContext1, interaction);
				}
			},
		);

		observeInteractions(threeContext2, initialDisplay2).subscribe(
			(interaction) => {
				if (currentPlayer === 1) {
					cast(frontContext2, interaction);
				}
			},
		);

		observeGame(frontContext1)
			.pipe(portray(frontContext1.publicKey))
			.subscribe((display) => {
				render(threeContext1, display);
			});

		observeGame(frontContext2)
			.pipe(portray(frontContext2.publicKey))
			.subscribe((display) => {
				render(threeContext2, display);
			});
	})
	.catch(console.error);

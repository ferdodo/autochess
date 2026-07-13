import { GUI } from "dat.gui";

export class GuiManager {
	#gui: GUI = new GUI();

	cameraOverride = {
		positionX: 0,
		positionY: 0,
		positionZ: 0,
		rotationX: 0,
		rotationY: 0,
	};

	constructor() {
		const cameraFolder = this.#gui.addFolder("Camera Override");
		cameraFolder.add(this.cameraOverride, "positionX", -5, 5, 0.1);
		cameraFolder.add(this.cameraOverride, "positionY", -5, 5, 0.1);
		cameraFolder.add(this.cameraOverride, "positionZ", -5, 5, 0.1);
		cameraFolder.add(this.cameraOverride, "rotationX", -Math.PI, Math.PI, 0.1);
		cameraFolder.add(this.cameraOverride, "rotationY", -Math.PI, Math.PI, 0.1);
	}

	addPlayerSwitch(switchPlayer1: () => void, switchPlayer2: () => void): void {
		const playerFolder = this.#gui.addFolder("Player");
		const playerActions = { switchPlayer1, switchPlayer2 };
		playerFolder.add(playerActions, "switchPlayer1");
		playerFolder.add(playerActions, "switchPlayer2");
	}
}

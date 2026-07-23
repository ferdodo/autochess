import { GUI } from "dat.gui";
import { ReplaySubject } from "rxjs";
import type { Observable } from "rxjs";
import type { ViewDisplay } from "core/src/types/ViewDisplay";

export class GuiManager {
	#gui: GUI = new GUI();
	#cameraOverride$ = new ReplaySubject<ViewDisplay["cameraOverride"]>(1);

	cameraOverride = {
		positionX: 0,
		positionY: 0,
		positionZ: 0,
		rotationX: 0,
		rotationY: 0,
	};

	get cameraOverride$(): Observable<ViewDisplay["cameraOverride"]> {
		return this.#cameraOverride$.asObservable();
	}

	constructor() {
		const cameraFolder = this.#gui.addFolder("Camera Override");
		cameraFolder
			.add(this.cameraOverride, "positionX", -5, 5, 0.1)
			.onChange(() => {
				this.#emitCameraOverride();
			});
		cameraFolder
			.add(this.cameraOverride, "positionY", -5, 5, 0.1)
			.onChange(() => {
				this.#emitCameraOverride();
			});
		cameraFolder
			.add(this.cameraOverride, "positionZ", -5, 5, 0.1)
			.onChange(() => {
				this.#emitCameraOverride();
			});
		cameraFolder
			.add(this.cameraOverride, "rotationX", -Math.PI, Math.PI, 0.1)
			.onChange(() => {
				this.#emitCameraOverride();
			});
		cameraFolder
			.add(this.cameraOverride, "rotationY", -Math.PI, Math.PI, 0.1)
			.onChange(() => {
				this.#emitCameraOverride();
			});
		this.#emitCameraOverride();
	}

	#emitCameraOverride(): void {
		this.#cameraOverride$.next({ ...this.cameraOverride });
	}

	addPlayerSwitch(switchPlayer1: () => void, switchPlayer2: () => void): void {
		const playerFolder = this.#gui.addFolder("Player");
		const playerActions = { switchPlayer1, switchPlayer2 };
		playerFolder.add(playerActions, "switchPlayer1");
		playerFolder.add(playerActions, "switchPlayer2");
	}
}

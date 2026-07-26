import { GUI } from "dat.gui";
import { ReplaySubject } from "rxjs";
import type { Observable } from "rxjs";
import type { ViewDisplay } from "core/src/types/ViewDisplay";
import { getWindowRatio } from "../../interface/utils/getWindowRatio";

function getDefaultFov(): number {
	const compensationValue =
		Math.max(0, (-getWindowRatio() + 1.6) / 0.055) ** 1.3;
	return 25 + compensationValue;
}

export class GuiManager {
	#gui: GUI = new GUI();
	#cameraOverride$ = new ReplaySubject<ViewDisplay["cameraOverride"]>(1);
	#cameraFolder: GUI;

	cameraOverride = {
		positionX: 0,
		positionY: 0,
		positionZ: 0,
		rotationX: 0,
		rotationY: 0,
		fov: getDefaultFov(),
	};

	#cameraPresets: Record<string, ViewDisplay["cameraOverride"]> = {
		shopFromRight: {
			positionX: 0.9,
			positionY: -1.3,
			positionZ: -0.2,
			rotationX: 0.8,
			rotationY: 0.6,
			fov: 25,
		},
	};

	get cameraOverride$(): Observable<ViewDisplay["cameraOverride"]> {
		return this.#cameraOverride$.asObservable();
	}

	constructor() {
		this.#cameraFolder = this.#gui.addFolder("Camera Override");
		this.#cameraFolder
			.add(this.cameraOverride, "positionX", -5, 5, 0.1)
			.onChange(() => {
				this.#emitCameraOverride();
			});
		this.#cameraFolder
			.add(this.cameraOverride, "positionY", -5, 5, 0.1)
			.onChange(() => {
				this.#emitCameraOverride();
			});
		this.#cameraFolder
			.add(this.cameraOverride, "positionZ", -5, 5, 0.1)
			.onChange(() => {
				this.#emitCameraOverride();
			});
		this.#cameraFolder
			.add(this.cameraOverride, "rotationX", -Math.PI, Math.PI, 0.1)
			.onChange(() => {
				this.#emitCameraOverride();
			});
		this.#cameraFolder
			.add(this.cameraOverride, "rotationY", -Math.PI, Math.PI, 0.1)
			.onChange(() => {
				this.#emitCameraOverride();
			});
		this.#cameraFolder
			.add(this.cameraOverride, "fov", 10, 90, 0.1)
			.onChange(() => {
				this.#emitCameraOverride();
			});

		const presetFolder = this.#gui.addFolder("Camera Override Preset");
		for (const [presetName] of Object.entries(this.#cameraPresets)) {
			presetFolder.add(
				{ [presetName]: () => this.#applyPreset(presetName) },
				presetName,
			);
		}

		this.#emitCameraOverride();
	}

	#emitCameraOverride(): void {
		this.#cameraOverride$.next({ ...this.cameraOverride });
	}

	#applyPreset(presetName: string): void {
		const preset = this.#cameraPresets[presetName];
		if (preset) {
			for (const controller of this.#cameraFolder.__controllers) {
				switch (controller.property) {
					case "positionX":
					case "positionY":
					case "positionZ":
					case "rotationX":
					case "rotationY":
					case "fov":
						controller.setValue(preset[controller.property]);
						break;
					default:
						throw new Error(`Unknown camera property: ${controller.property}`);
				}
			}
		}
	}

	addPlayerSwitch(switchPlayer1: () => void, switchPlayer2: () => void): void {
		const playerFolder = this.#gui.addFolder("Player");
		const playerActions = { switchPlayer1, switchPlayer2 };
		playerFolder.add(playerActions, "switchPlayer1");
		playerFolder.add(playerActions, "switchPlayer2");
	}
}

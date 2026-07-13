import type { Observable } from "rxjs";
import { Subject } from "rxjs";
import type { GuiManager } from "./gui";

export class PlayerSwitch {
	#currentPlayer: Subject<number> = new Subject();

	constructor(guiManager: GuiManager) {
		guiManager.addPlayerSwitch(
			() => this.switchPlayer1(),
			() => this.switchPlayer2(),
		);
	}

	observeCurrentPlayer(): Observable<number> {
		return this.#currentPlayer.asObservable();
	}

	switchPlayer(index: number) {
		const canvases = document.querySelectorAll("canvas");

		for (const [i, canvas] of Object.entries(canvases)) {
			const isVisible = Number.parseInt(i) === index;
			canvas.style.display = isVisible ? "block" : "none";

			if (isVisible) {
				this.#currentPlayer.next(index);
			}
		}
	}

	switchPlayer1() {
		this.switchPlayer(0);
	}

	switchPlayer2() {
		this.switchPlayer(1);
	}
}

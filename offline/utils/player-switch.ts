import { GUI } from "dat.gui";
import type { Observable } from "rxjs";
import { Subject } from "rxjs";

export class PlayerSwitch {
	#gui: GUI = new GUI();
	#currentPlayer: Subject<number> = new Subject();

	constructor() {
		this.#gui.add(this, "switchPlayer1");
		this.#gui.add(this, "switchPlayer2");
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

import { GUI } from "dat.gui";
import type { Observable } from "rxjs";
import { Subject } from "rxjs";

export class PlayerSwitch {
	gui: GUI = new GUI();
	currentPlayer: Subject<number> = new Subject();

	constructor() {
		this.gui.add(this, "switchPlayer1");
		this.gui.add(this, "switchPlayer2");
	}

	observeCurrentPlayer(): Observable<number> {
		return this.currentPlayer.asObservable();
	}

	switchPlayer1() {
		this.currentPlayer.next(1);
	}

	switchPlayer2() {
		this.currentPlayer.next(2);
	}
}

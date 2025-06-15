import { Subject } from "rxjs";

function createFpsCounter() {
	const frameStartSubject = new Subject<void>();
	const frameEndSubject = new Subject<void>();

	const frameStart$ = frameStartSubject.asObservable();
	const frameEnd$ = frameEndSubject.asObservable();

	function notifyFrameStart(): void {
		frameStartSubject.next();
	}

	function notifyFrameEnd(): void {
		frameEndSubject.next();
	}

	return {
		frameStart$,
		frameEnd$,
		notifyFrameStart,
		notifyFrameEnd,
	};
}

export const fpsCounter = createFpsCounter();

import { Subject } from "rxjs";
import type { Observable } from "rxjs";
import { map, sampleTime } from "rxjs/operators";

const frameSubject = new Subject<void>();

export function observeFps(interval = 2000): Observable<number> {
	let frames = 0;

	return frameSubject.pipe(
		map(() => {
			frames++;
			return frames;
		}),
		sampleTime(interval),
		map(() => {
			const fps = frames * (1000 / interval);
			frames = 0;
			return fps;
		}),
	);
}

export function notifyFrame(): void {
	frameSubject.next();
}

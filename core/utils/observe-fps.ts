import { Subject } from "rxjs";

const frameStartSubject = new Subject<void>();
const frameEndSubject = new Subject<void>();

export const frameStart$ = frameStartSubject.asObservable();
export const frameEnd$ = frameEndSubject.asObservable();

export function notifyFrameStart(): void {
	frameStartSubject.next();
}

export function notifyFrameEnd(): void {
	frameEndSubject.next();
}

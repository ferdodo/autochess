import { Observable } from "rxjs";
import { share } from "rxjs/operators";

export const frame$ = new Observable<number>((subscriber) => {
	let stop = false;

	function requestNext(time: number) {
		subscriber.next(time);

		if (!stop) {
			requestAnimationFrame(requestNext);
		}
	}

	requestNext(0);

	return () => {
		stop = true;
	};
}).pipe(share());

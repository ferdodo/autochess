import type { Observable } from "rxjs";

export interface Connection<I, O> {
	id: string;
	messages$: Observable<I>;
	send: (payload: O) => void;
}

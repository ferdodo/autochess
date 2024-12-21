import type { Observable } from "rxjs";
import type { BackEvent } from "./back-events.js";

export interface Bus {
	publish: (topic: BackEvent, message: string) => void;
	events$: Observable<[BackEvent, string]>;
}

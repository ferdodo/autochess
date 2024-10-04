import type { Queuer } from "./queuer";
import type { Observable } from "rxjs";

export interface QueuerDataMapper {
	read: () => Promise<Queuer[]>;
	save: (queuer: Queuer) => Promise<boolean>;
	observe: () => Observable<Queuer[]>;
}

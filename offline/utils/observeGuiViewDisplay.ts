import type { Observable } from "rxjs";
import { map } from "rxjs/operators";
import type { ViewDisplay } from "core/src/types/ViewDisplay";

export function observeGuiViewDisplay(
	cameraOverride$: Observable<ViewDisplay["cameraOverride"]>,
): Observable<ViewDisplay> {
	return cameraOverride$.pipe(
		map((cameraOverride) => ({
			cameraOverride,
		})),
	);
}

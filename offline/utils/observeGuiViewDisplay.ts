import type { Observable } from "rxjs";
import { combineLatestWith, map } from "rxjs/operators";
import type { ViewDisplay } from "core/src/types/ViewDisplay";
import { observeWindowDimentions } from "core/src/utils/observeWindowDimentions";

export function observeGuiViewDisplay(
	cameraOverride$: Observable<ViewDisplay["cameraOverride"]>,
): Observable<ViewDisplay> {
	return cameraOverride$.pipe(
		combineLatestWith(observeWindowDimentions()),
		map(
			([cameraOverride, { w, h }]: [
				ViewDisplay["cameraOverride"],
				{ w: number; h: number },
			]) => ({
				cameraOverride,
				windowWidth: w,
				windowHeight: h,
			}),
		),
	);
}

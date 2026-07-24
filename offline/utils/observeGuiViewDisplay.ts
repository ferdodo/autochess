import type { Observable } from "rxjs";
import { combineLatestWith, map } from "rxjs/operators";
import type { ViewDisplay } from "core/src/types/ViewDisplay";
import { observeWindowDimentions } from "core/src/utils/observeWindowDimentions";
import { getWindowRatio } from "../../interface/utils/getWindowRatio";

function getFov(): number {
	const compensationValue =
		Math.max(0, (-getWindowRatio() + 1.6) / 0.055) ** 1.3;
	return 25 + compensationValue;
}

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

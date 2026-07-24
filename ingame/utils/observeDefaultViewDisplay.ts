import type { Observable } from "rxjs";
import { map } from "rxjs/operators";
import type { ViewDisplay } from "core/src/types/ViewDisplay";
import { observeWindowDimentions } from "core/src/utils/observeWindowDimentions";

export function observeDefaultViewDisplay(): Observable<ViewDisplay> {
	return observeWindowDimentions().pipe(
		map(({ w, h }: { w: number; h: number }) => ({
			cameraOverride: {
				positionX: 0,
				positionY: 0,
				positionZ: 0,
				rotationX: 0,
				rotationY: 0,
			},
			windowWidth: w,
			windowHeight: h,
		})),
	);
}

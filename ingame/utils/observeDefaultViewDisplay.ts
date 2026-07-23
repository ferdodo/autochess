import type { Observable } from "rxjs";
import { of } from "rxjs";
import type { ViewDisplay } from "core/src/types/ViewDisplay";

export function observeDefaultViewDisplay(): Observable<ViewDisplay> {
	return of({
		cameraOverride: {
			positionX: 0,
			positionY: 0,
			positionZ: 0,
			rotationX: 0,
			rotationY: 0,
		},
	});
}

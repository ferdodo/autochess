/*
if (isInvalidSignature(initiateGameRequest)) {
    connection.send({
        initiateGameResponse: {
            invalidSignature: true,
        },
    });
    return false;
}

if (isTimestampExpired(joinGameRequest.timestamp)) {
    connection.send({
        initiateGameResponse: {
            timestampExpired: true,
        },
    });

    return false;
}
*/

import { initiateGameHandle } from "../api/initiate-game-handle";
import type { BackContext } from "../types/back-context";

export function startServer(context: BackContext) {
	const subscriptions = [initiateGameHandle(context)];

	return function stopServer() {
		for (const subscription of subscriptions) {
			subscription.unsubscribe();
		}
	};
}

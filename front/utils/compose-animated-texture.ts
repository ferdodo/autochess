import { NearestFilter, CanvasTexture, SRGBColorSpace } from "three";
import type { Texture } from "three";

export function composeAnimatedTexture(
	texture: Texture,
	totalFrames: number,
	endTexture?: Texture,
	endTotalFrames?: number,
): [CanvasTexture, () => void] {
	const canvas = document.createElement("canvas");
	const frameWidth = 100;
	const frameHeight = 100;
	canvas.width = frameWidth;
	canvas.height = frameHeight;
	const context = canvas.getContext("2d");

	if (!context) {
		throw new Error("Canvas 2d context not supported !");
	}

	let animationPlayed = false;
	let currentFrame = 0;

	const canvasTexture = new CanvasTexture(canvas);

	const paintCanvas = () => {
		context.clearRect(0, 0, frameWidth, frameHeight);

		context.drawImage(
			animationPlayed && endTexture ? endTexture.image : texture.image,
			currentFrame * frameWidth,
			0,
			frameWidth,
			frameHeight,
			0,
			0,
			frameWidth,
			frameHeight,
		);

		currentFrame =
			(currentFrame + 1) %
			(animationPlayed && endTotalFrames !== undefined
				? endTotalFrames
				: totalFrames);

		if (currentFrame === 0) {
			animationPlayed = true;

			if (endTexture === undefined) {
				clearInterval(interval);
			}
		}

		canvasTexture.needsUpdate = true;
	};

	paintCanvas();
	const interval = setInterval(paintCanvas, 80);

	canvasTexture.minFilter = NearestFilter;
	canvasTexture.magFilter = NearestFilter;
	canvasTexture.colorSpace = SRGBColorSpace;

	return [
		canvasTexture,
		function dispose() {
			clearInterval(interval);
			canvasTexture.dispose();
		},
	];
}

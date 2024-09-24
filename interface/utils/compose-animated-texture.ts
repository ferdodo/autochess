import { NearestFilter, CanvasTexture, SRGBColorSpace } from "three";
import type { Texture } from "three";

const availableCanvas: HTMLCanvasElement[] = [];

function getAvailableCanvas(): HTMLCanvasElement {
	if (availableCanvas.length === 0) {
		return document.createElement("canvas");
	}

	const canvas = availableCanvas.pop();

	if (!canvas) {
		throw new Error("Canvas not found !");
	}

	return canvas;
}

function releaseCanvas(canvas: HTMLCanvasElement) {
	availableCanvas.push(canvas);
}

export function composeAnimatedTexture(
	texture: Texture,
	totalFrames: number,
	endTexture?: Texture,
	endTotalFrames?: number,
): [CanvasTexture, () => void] {
	const canvas = getAvailableCanvas();

	const frameWidth = 100;
	const frameHeight = 100;
	canvas.width = frameWidth;
	canvas.height = frameHeight;
	const canvasContext = canvas.getContext("2d");

	if (!canvasContext) {
		throw new Error("Canvas 2d threeContext not supported !");
	}

	let animationPlayed = false;
	let currentFrame = 0;

	const canvasTexture = new CanvasTexture(canvas);

	const period = 80;
	let lastFrame = 0;
	let disposed = false;

	const paintCanvas = (time: number) => {
		if (disposed) {
			return;
		}

		if (time - lastFrame < period) {
			requestAnimationFrame(paintCanvas);
			return;
		}

		lastFrame = time;

		canvasContext.clearRect(0, 0, frameWidth, frameHeight);

		canvasContext.drawImage(
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

		if (currentFrame === 0 && animationPlayed && endTexture === undefined) {
			return;
		}

		currentFrame =
			(currentFrame + 1) %
			(animationPlayed && endTotalFrames !== undefined
				? endTotalFrames
				: totalFrames);

		if (currentFrame === 0) {
			animationPlayed = true;
		}

		canvasTexture.needsUpdate = true;

		requestAnimationFrame(paintCanvas);
	};

	paintCanvas(0);
	requestAnimationFrame(paintCanvas);

	//canvasTexture.minFilter = NearestFilter;
	canvasTexture.magFilter = NearestFilter;
	canvasTexture.colorSpace = SRGBColorSpace;

	return [
		canvasTexture,
		function dispose() {
			disposed = true;
			canvasTexture.dispose();
			releaseCanvas(canvas);
		},
	];
}

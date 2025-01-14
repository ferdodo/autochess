import { NearestFilter, CanvasTexture, SRGBColorSpace } from "three";
import type { Texture } from "three";
import { frame$ } from "./frame";

const availableCanvas: [
	HTMLCanvasElement,
	CanvasTexture,
	CanvasRenderingContext2D,
][] = [];

const frameWidth = 100;
const frameHeight = 100;

function getAvailableCanvas(): [
	HTMLCanvasElement,
	CanvasTexture,
	CanvasRenderingContext2D,
] {
	if (availableCanvas.length === 0) {
		const canvas = document.createElement("canvas");
		canvas.width = frameWidth;
		canvas.height = frameHeight;
		const canvasContext = canvas.getContext("2d");

		if (!canvasContext) {
			throw new Error("Canvas 2d threeContext not supported !");
		}

		return [canvas, new CanvasTexture(canvas), canvasContext];
	}

	const canvas = availableCanvas.pop();

	if (!canvas) {
		throw new Error("Canvas not found !");
	}

	return canvas;
}

function releaseCanvas(
	canvas: HTMLCanvasElement,
	CanvasTexture: CanvasTexture,
	context: CanvasRenderingContext2D,
) {
	availableCanvas.push([canvas, CanvasTexture, context]);
}

export function composeAnimatedTexture(
	texture: Texture,
	totalFrames: number,
	endTexture?: Texture,
	endTotalFrames?: number,
): [CanvasTexture, () => void] {
	const [canvas, canvasTexture, canvasContext] = getAvailableCanvas();

	let animationPlayed = false;
	let currentFrame = 0;

	const period = 80;
	let lastFrame = 0;
	let disposed = false;

	const paintCanvas = (time: number) => {
		if (disposed) {
			return;
		}

		if (time - lastFrame < period) {
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
	};

	const frameSubscription = frame$.subscribe(paintCanvas);

	//canvasTexture.minFilter = NearestFilter;
	canvasTexture.magFilter = NearestFilter;
	canvasTexture.colorSpace = SRGBColorSpace;

	return [
		canvasTexture,
		function dispose() {
			disposed = true;
			frameSubscription.unsubscribe();
			releaseCanvas(canvas, canvasTexture, canvasContext);
		},
	];
}

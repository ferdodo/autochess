import { Mesh, Raycaster } from "three";
import type { Display } from "../types/display";
import type { Context } from "../types/context";

export function renderPieceMesh(context: Context, display: Display): void {
	for (const piece of display.pieces) {
		const material = context.pieceMaterials[piece.id];

		if (!material) {
			throw new Error("Material not found !");
		}

		const meshCreated = !context.pieceMeshes[piece.id];
		context.pieceMeshes[piece.id] ||= new Mesh(context.pieceGeometry, material);
		const mesh: Mesh = context.pieceMeshes[piece.id];

		if (meshCreated) {
			context.scene.add(mesh);
		}

		if (mesh.material !== material) {
			mesh.material = material;
		}

		const cubeSize = 1;
		const pieceSize = 1 / display.board.w;
		const relativeOriginX = -(cubeSize / 2) + pieceSize / 2;
		const relativeOriginY = cubeSize / 2 + pieceSize / 2;
		const relativeOriginZ = cubeSize / 2 - pieceSize / 2;

		if (meshCreated) {
			mesh.position.set(
				relativeOriginX + pieceSize * piece.position.x,
				relativeOriginY,
				relativeOriginZ - pieceSize * piece.position.y,
			);
		}

		const targetX = relativeOriginX + pieceSize * piece.position.x;
		const targetY = relativeOriginY;
		const targetZ = relativeOriginZ - pieceSize * piece.position.y;
		const treshold = 0.01;

		const diffX = targetX - mesh.position.x;
		const diffY = targetY - mesh.position.y;
		const diffZ = targetZ - mesh.position.z;

		const moveX =
			diffX > treshold ? treshold : diffX < -treshold ? -treshold : 0;

		const moveY =
			diffY > treshold ? treshold : diffY < -treshold ? -treshold : 0;

		const moveZ =
			diffZ > treshold ? treshold : diffZ < -treshold ? -treshold : 0;

		mesh.position.set(
			mesh.position.x + moveX,
			mesh.position.y + moveY,
			mesh.position.z + moveZ,
		);

		if (meshCreated) {
			mesh.rotation.set(0, piece.right ? Math.PI : 0, 0);
		}

		const scale = 5.3;
		mesh.scale.set(scale, scale, 1);

		if (piece.transposed) {
			const raycaster = new Raycaster();

			const direction = context.pointer
				.clone()
				.sub(context.camera.position)
				.normalize();

			raycaster.set(context.camera.position, direction);

			const intersections = raycaster.intersectObject(
				context.transpositionPlane,
			);

			if (!intersections.length) {
				throw new Error("Failed to intersect selected piece with pointer !");
			}

			const [{ point }] = intersections;
			mesh.position.copy(point);
		}
	}

	for (const pieceId of Object.keys(context.pieceMeshes)) {
		if (!display.pieces.find((p) => p.id === pieceId)) {
			context.scene.remove(context.pieceMeshes[pieceId]);
			delete context.pieceMeshes[pieceId];
		}
	}
}

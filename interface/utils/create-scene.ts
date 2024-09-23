import {
	Scene,
	BoxGeometry,
	MeshStandardMaterial,
	AmbientLight,
	Mesh,
	HemisphereLight,
} from "three";

export function createScene(): Scene {
	const scene = new Scene();
	const cubeSize = 1;
	const geometry = new BoxGeometry(cubeSize, cubeSize, cubeSize);
	const material = new MeshStandardMaterial({ color: 0x00ff00 });
	const cube = new Mesh(geometry, material);
	scene.add(cube);
	const ambientLight = new AmbientLight(0xffffff, 0.5);
	scene.add(ambientLight);
	const hemisphereLight = new HemisphereLight(0xffffff, 0x444444, 0.5);
	hemisphereLight.position.set(0, 1, 0);
	scene.add(hemisphereLight);
	return scene;
}

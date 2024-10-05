import type { Product } from "../types/product";
import { uid } from "uid";
import { getRandomAppellation } from "./get-random-appellation";

export class ProductFactory {
	build(): Product {
		return {
			id: uid(),
			appellation: getRandomAppellation(),
		};
	}
}

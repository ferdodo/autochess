import type { Trait } from "../types/Trait.js";
import { getHeroTraits } from "./getHeroTraits.js";
import type { Piece } from "../types/Piece.js";
import type SynergyDisplay from "../types/SynergyDisplay.js";
import { getSynergiesThresholds } from "./getSynergiesThresholds.js";

export default function calculateSynergies(pieces: Piece[]): SynergyDisplay[] {
	const traitCounts = new Map<Trait, number>();

	for (const piece of pieces) {
		const traits = getHeroTraits(piece.hero.appellation);
		for (const trait of traits) {
			traitCounts.set(trait, (traitCounts.get(trait) ?? 0) + 1);
		}
	}

	const thresholds = getSynergiesThresholds();
	const synergies: SynergyDisplay[] = [];
	for (const [trait, count] of traitCounts) {
		synergies.push({
			trait,
			count,
			threshold: thresholds[trait],
		});
	}

	return synergies.sort((a, b) => b.count - a.count);
}

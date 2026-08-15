import { Appellation } from "core/src/types/Appellation";
import { Trait } from "core/src/types/Trait";
import { getHeroTraits } from "core/src/utils/getHeroTraits";
import { getSynergiesThresholds } from "core/src/utils/getSynergiesThresholds";
import { traitBonuses } from "./traitBonuses.js";
import { heroImages } from "./heroImages.js";

const heroes = Object.values(Appellation);
const traits = Object.values(Trait);
const thresholds = getSynergiesThresholds();

const IDLE_FRAME_SIZE = 128;
const IDLE_FRAME_COUNT = 6;
const IDLE_FRAME_DURATION_MS = 80;

export function App(): React.ReactNode {
	return (
		<div>
			<style>{`
				@keyframes idle-sprite {
					from { background-position: 0 0; }
					to { background-position: -${IDLE_FRAME_SIZE * IDLE_FRAME_COUNT}px 0; }
				}
				.hero-sprite {
					width: ${IDLE_FRAME_SIZE}px;
					height: ${IDLE_FRAME_SIZE}px;
					background-repeat: no-repeat;
					background-size: ${IDLE_FRAME_SIZE * IDLE_FRAME_COUNT}px ${IDLE_FRAME_SIZE}px;
					animation: idle-sprite ${(IDLE_FRAME_COUNT * IDLE_FRAME_DURATION_MS) / 1000}s steps(${IDLE_FRAME_COUNT}) infinite;
					image-rendering: pixelated;
				}
			`}</style>

			<h1>Codex</h1>

			<h2>Traits</h2>
			<table border={1} cellPadding={4}>
				<thead>
					<tr>
						<th>Trait</th>
						<th>Threshold</th>
						<th>Heroes</th>
						<th>Bonus</th>
					</tr>
				</thead>
				<tbody>
					{traits.map((trait) => (
						<tr key={trait}>
							<td>{trait}</td>
							<td>{thresholds[trait]}</td>
							<td>{heroes.filter((hero) => getHeroTraits(hero).includes(trait)).join(", ")}</td>
							<td>{traitBonuses[trait]}</td>
						</tr>
					))}
				</tbody>
			</table>

			<h2>Heroes</h2>
			<table border={1} cellPadding={4}>
				<thead>
					<tr>
						<th>Image</th>
						<th>Hero</th>
						<th>Traits</th>
					</tr>
				</thead>
				<tbody>
					{heroes.map((hero) => (
						<tr key={hero}>
							<td>
								<div
									className="hero-sprite"
									style={{ backgroundImage: `url(${heroImages[hero]})` }}
								/>
							</td>
							<td>{hero}</td>
							<td>{getHeroTraits(hero).join(", ")}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

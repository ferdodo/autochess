export function getHeroBaseHpByCost(cost: number): number {
	switch (cost) {
		case 1:
			return 5;
		case 2:
			return 8;
		case 3:
			return 12;
		default:
			return 5;
	}
}

export function calculateElo(
	player1Elo: number,
	player2Elo: number,
	player1Wins: boolean,
): number {
	const kFactor = 32;
	const player1ExpectedScore =
		1 / (1 + 10 ** ((player2Elo - player1Elo) / 400));
	const player1ActualScore = player1Wins ? 1 : 0;
	const player1NewElo =
		player1Elo + kFactor * (player1ActualScore - player1ExpectedScore);
	return Math.round(player1NewElo);
}

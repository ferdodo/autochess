type BenchmarkResultContainerProps = {
	children: React.ReactNode;
};

export function BenchmarkResultContainer({ children }: BenchmarkResultContainerProps): React.ReactNode {
	return (
		<div
			style={{
				backgroundColor: "#ffffff",
				borderRadius: "8px",
				padding: "24px",
			}}
		>
			{children}
		</div>
	);
}

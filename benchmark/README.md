# Benchmark

Directory for benchmarking project functions.

## Structure

- `perf/` — benchmark scripts (`.bench.ts`)
- `reports/` — Vite frontend to display results

## How it works

1. Each benchmark in `perf/` generates a `.result.json` file
2. The Vite frontend loads all results and displays them

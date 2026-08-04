#!/bin/bash

set -e

echo "Running benchmarks..."

find perf -name "*.bench.ts" -type f | sort | while read bench_file; do
  if [ -f "$bench_file" ]; then
    echo "Running $bench_file..."
    node --expose-gc --import tsx "$bench_file"
  fi
done

echo "All benchmarks completed!"

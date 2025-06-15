#!/bin/bash
npx esbuild ./benchmark/with-game-over.benchmark.ts --bundle --platform=node --target=node14 --sourcemap --outfile=./benchmark/with-game-over.benchmark.js
node --enable-source-maps --cpu-prof benchmark/with-game-over.benchmark.js
#!/bin/bash
npx esbuild ./benchmark/game-clone.benchmark.ts --bundle --platform=node --target=node14 --sourcemap --outfile=./benchmark/game-clone.benchmark.js
node --enable-source-maps --cpu-prof benchmark/game-clone.benchmark.js
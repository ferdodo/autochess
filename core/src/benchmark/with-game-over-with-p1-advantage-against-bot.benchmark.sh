#!/bin/bash
npx esbuild ./benchmark/with-game-over-with-p1-advantage-against-bot.benchmark.ts --bundle --platform=node --target=node14 --sourcemap --outfile=./benchmark/with-game-over-with-p1-advantage-against-bot.benchmark.js
NODE_ENV=test node --enable-source-maps --cpu-prof benchmark/with-game-over-with-p1-advantage-against-bot.benchmark.js
FROM node:23 AS deps

WORKDIR /autochess/benchmark

COPY package.json .
RUN npm install

FROM autochess-core

WORKDIR /autochess/benchmark

COPY --from=deps /autochess/benchmark /autochess/benchmark

COPY . .

RUN npm run build

CMD ["npm", "start"]

FROM node:23 AS deps

WORKDIR /autochess/codex

COPY package.json .
RUN npm install

FROM autochess-assets
FROM autochess-core

WORKDIR /autochess/codex

COPY --from=deps /autochess/codex /autochess/codex
COPY --from=1 /autochess/assets /autochess/assets

COPY . .

RUN npm run build

CMD ["npm", "start"]

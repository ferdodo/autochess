FROM node:23 AS deps
WORKDIR /autochess/interface
COPY package.json .
COPY npm-shrinkwrap.json .
RUN npm config set maxsockets 1
RUN npm install
RUN npm audit --audit-level=low

FROM autochess-assets
FROM autochess-core
WORKDIR /autochess/interface
COPY --from=0 /autochess/interface /autochess/interface
COPY --from=1 /autochess/assets /autochess/assets

COPY . .
RUN npm run build

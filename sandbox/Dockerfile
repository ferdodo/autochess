FROM node:23 AS deps
WORKDIR /autochess/sandbox
COPY package.json .
COPY npm-shrinkwrap.json .
RUN npm config set maxsockets 1
RUN npm install
RUN npm audit --audit-level=low

FROM autochess-interface
WORKDIR /autochess/sandbox
COPY --from=0 /autochess/sandbox /autochess/sandbox

COPY . .

ARG VITE_WEBSOCKET_DOMAINS
ARG VITE_WEBSOCKET_PROTOCOL

RUN npm run build
CMD npm run start
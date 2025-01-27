FROM node:23 AS deps
WORKDIR /autochess/ingame
COPY package.json .
COPY npm-shrinkwrap.json .
RUN npm install
RUN npm audit --audit-level=low

FROM autochess-interface
WORKDIR /autochess/ingame
COPY --from=0 /autochess/ingame /autochess/ingame
COPY . .

ARG VITE_WEBSOCKET_DOMAINS
ARG VITE_WEBSOCKET_PROTOCOL
ARG VITE_WEBSOCKET_PORTS

RUN npm run build
CMD npm run start

FROM node
WORKDIR /autochess/ingame
COPY package.json .
COPY npm-shrinkwrap.json .
RUN npm install
RUN npm audit --audit-level=low

FROM autochess-interface
WORKDIR /autochess/ingame
COPY --from=0 /autochess/ingame /autochess/ingame
COPY . .

ARG VITE_BACK_DOMAIN
ARG VITE_WEBSOCKET_PROTOCOL

RUN npm run build
CMD npm run start
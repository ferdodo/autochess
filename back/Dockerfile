FROM node
WORKDIR /autochess/back
COPY package.json .
COPY npm-shrinkwrap.json .
RUN npm install
RUN npm audit --audit-level=low

FROM autochess-core
COPY --from=0 /autochess/back /autochess/back

FROM autochess-database

FROM oven/bun
COPY --from=1 /autochess /autochess
COPY --from=0 /autochess/back /autochess/back
COPY --from=2 /certs /certs
WORKDIR /autochess/back
COPY . .
RUN bun run build
CMD bun --watch run main.ts

FROM node
WORKDIR /autochess/back
COPY package.json .
COPY npm-shrinkwrap.json .
RUN npm install
RUN npm audit --audit-level=low

FROM autochess-core
COPY --from=0 /autochess/back /autochess/back

FROM oven/bun
COPY --from=1 /autochess /autochess
COPY --from=0 /autochess/back /autochess/back
WORKDIR /autochess/back
COPY . .
CMD bun --watch run main.ts

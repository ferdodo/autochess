FROM node:23
WORKDIR /autochess/core
COPY package.json .
COPY npm-shrinkwrap.json .
RUN npm config set maxsockets 1
RUN npm install
RUN npm audit --audit-level=low
COPY . .
RUN npm run build

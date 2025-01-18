FROM node
RUN apt-get update && apt-get install blender draco libdraco7 python3-numpy -y
WORKDIR /autochess/assets
COPY package.json .
COPY npm-shrinkwrap.json .
RUN npm config set maxsockets 1
RUN npm install
RUN npm audit --audit-level=low
COPY . .
RUN npm run build

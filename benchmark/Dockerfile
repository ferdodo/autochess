FROM node:23

WORKDIR /autochess/benchmark

COPY package.json .
RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "start"]

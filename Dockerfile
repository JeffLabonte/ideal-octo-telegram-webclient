FROM node:lts-alpine
LABEL maintainer="grimsleepless@protonmail.com"

RUN npm install -g http-server
WORKDIR /app
COPY package*.json ./

RUN npm install
COPY . .

RUN npm run build && rm -rf node_modules src

EXPOSE 8080
CMD [ "http-server", "dist" ]

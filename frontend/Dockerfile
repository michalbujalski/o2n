# build stage
FROM node:lts-alpine

RUN npm install -g http-server

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
# RUN npm run server-api

# production stage
EXPOSE 8080
CMD [ "http-server", "dist" ]
# build stage
FROM node:lts-alpine

COPY package*.json ./
RUN npm install
COPY . .

# production stage
EXPOSE 8000
ENTRYPOINT ["npm"]
CMD [ "run", "prod" ]
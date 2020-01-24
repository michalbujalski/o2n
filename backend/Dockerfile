# build stage
FROM node:lts-alpine

# RUN npm install -g http-server
RUN npm install -g json-server

WORKDIR /data
VOLUME /data
# COPY package*.json ./
# RUN npm install
COPY . .
# RUN npm run build
# RUN npm run server-api
RUN echo pwd
# production stage
EXPOSE 8000
# ENTRYPOINT ["json-server"]
CMD json-server db.json
# CMD []
# CMD ["json-server", "data/db.json"]
# CMD ["db.json"]
# CMD ["json-server", "--host", "0.0.0.0", "db.json"]
# CMD ["db.json"]
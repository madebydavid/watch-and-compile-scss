FROM node:10-slim

WORKDIR /app
ADD . /app

EXPOSE 8080
CMD cd /app && npm install && npm run watch

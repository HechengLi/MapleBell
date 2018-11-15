FROM node:11-alpine

WORKDIR /server

COPY ./package.json /server
RUN npm install
COPY . /server
CMD node index.js

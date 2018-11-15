FROM node:11

WORKDIR /server

COPY ./package.json /server
RUN npm install
COPY . /server
CMD node index.js

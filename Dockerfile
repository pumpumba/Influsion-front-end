FROM node:latest
RUN npm install webpack -g
WORKDIR /src/usr/app
COPY . .
RUN yarn
RUN yarn build

FROM node:latest
RUN npm install http-proxy -g
RUN npm install express -g
WORKDIR /src/usr/app
COPY --from=0 /src/usr/app/dist .
COPY server.js .
EXPOSE 8080
CMD [ "node", "server.js" ]
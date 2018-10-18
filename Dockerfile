FROM node:latest
RUN npm install webpack -g
WORKDIR /src/usr/app
COPY . .
RUN yarn 
RUN yarn build

FROM node:latest
RUN npm install http-server -g
WORKDIR /src/usr/app
COPY --from=0 /src/usr/app/dist .
EXPOSE 8080
CMD [ "http-server", "-p 8080" ]
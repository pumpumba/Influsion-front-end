FROM node:latest

RUN npm install webpack -g
WORKDIR /app
COPY . .
RUN yarn run build

FROM node:latest
RUN npm install http-server -g
WORKDIR /app
COPY --from=0 /app/dist .
EXPOSE 8080
CMD [ "http-server", "./dist/", "-p 8080" ]
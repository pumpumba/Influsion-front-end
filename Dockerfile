FROM node:latest
RUN npm install webpack -g
WORKDIR /src/usr/app
COPY . .
RUN yarn
RUN yarn build

FROM node:latest
WORKDIR /src/usr/app
RUN mkdir node_modules
# add `/usr/src/app/node_modules/.bin` to $PATH
##ENV PATH /usr/src/app/node_modules/.bin:$PATH
#RUN npm install http-proxy -g
RUN npm install express -g
#RUN npm install
COPY --from=0 /src/usr/app/dist .
COPY --from=0 /src/usr/app/node_modules ./node_modules
COPY server.js .
EXPOSE 8080
CMD [ "node", "server.js" ]
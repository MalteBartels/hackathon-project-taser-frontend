FROM node:18-alpine as yarn-build
WORKDIR /app
COPY package.json /app 
COPY yarn.lock /app
RUN yarn install 
COPY . /app 
CMD yarn build

FROM node:18-alpine
WORKDIR /app
COPY ./package.json /app/package.json
COPY ./yarn.lock /app/yarn.lock
COPY --from=yarn-build /app/build /app
CMD node index.js

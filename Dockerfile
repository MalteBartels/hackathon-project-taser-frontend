FROM node:18-alpine as yarn-build
WORKDIR /app
COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock
RUN yarn install 
COPY . /app
RUN yarn build

FROM node:18-alpine
WORKDIR /app
COPY ./package.json /app/package.json
COPY ./yarn.lock /app/yarn.lock
COPY --from=yarn-build /app/build /app
CMD node index.js

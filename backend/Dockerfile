FROM node:16.14.0 AS prepare
WORKDIR /backend
COPY package.json yarn.lock ./
RUN yarn install
COPY tsconfig.json ./
COPY src src/

CMD ["yarn", "start"]

EXPOSE 4000
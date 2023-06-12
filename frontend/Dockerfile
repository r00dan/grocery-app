FROM node:16.20-alpine AS prepare
WORKDIR /frontend
COPY package.json yarn.lock ./
RUN yarn install
COPY tsconfig.json ./
COPY . .

CMD ["yarn", "dev"]
EXPOSE 3000
FROM node:16.16.0-alpine as deps
WORKDIR /app
COPY . .
RUN npm install

FROM node:16.16.0-alpine as build
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

FROM node:16.16.0-alpine as prodDeps
WORKDIR /app
COPY package.json package.json
RUN npm install --prod
RUN npm install typescript


FROM node:16.16.0-alpine as runner
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY --from=prodDeps /app/node_modules ./node_modules
COPY package.json package.json
CMD [ "npm", "run", "start:prod" ]

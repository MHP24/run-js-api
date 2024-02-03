# Dependencies required for build
FROM node:16.16.0-alpine as deps
WORKDIR /app
COPY . .
RUN npm install

# Build distribution output
FROM node:16.16.0-alpine as build
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

# Only necessary dependencies for production environment
FROM node:16.16.0-alpine as prodDeps
WORKDIR /app
COPY package.json package.json
RUN npm install --prod
RUN npm install typescript

# Starting using distribution bundle
FROM node:16.16.0-alpine as runner
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY --from=prodDeps /app/node_modules ./node_modules
COPY package.json package.json
CMD [ "npm", "run", "start:prod" ]

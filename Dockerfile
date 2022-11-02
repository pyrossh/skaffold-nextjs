FROM node:16 as development

ENV NEXT_TELEMETRY_DISABLED 1
WORKDIR /app

COPY package*.json .
RUN npm install

COPY . .
CMD ["npm", "run", "dev"]

FROM node:16 as build
WORKDIR /app

COPY --from=development /app ./
RUN npm run build

FROM gcr.io/distroless/nodejs:16 as production
WORKDIR /app

ENV NODE_ENV production
ENV PORT 3000
ENV NEXT_TELEMETRY_DISABLED 1

# COPY — from=build-env /app/package*.json ./
COPY --from=build-env /app/next.config.js ./
COPY --from=build-env /app/public ./public
COPY --from=build-env /app/.next ./.next
COPY --from=build-env /app/node_modules ./node_modules

CMD ["./node_modules/.bin/next", "start"]

FROM node:20-alpine AS builder

WORKDIR /usr/src/app

COPY . .

RUN yarn install && yarn build

FROM node:20-alpine AS node-runtime

RUN apk add --no-cache libc6-compat

FROM node:20-alpine AS runnner

WORKDIR /app

COPY --from=node-runtime /usr/local/bin/node /usr/local/bin/node
COPY --from=node-runtime /lib /lib
COPY --from=node-runtime /usr/lib /usr/lib

COPY --from=builder --chown=1001:1001 usr/src/app/.next/standalone ./
COPY --from=builder --chown=1001:1001 usr/src/app/.next/static ./.next/static
COPY --from=builder --chown=1001:1001 usr/src/app/public ./public

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE $PORT

CMD [ "node", "server.js" ]

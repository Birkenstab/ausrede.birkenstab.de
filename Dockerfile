FROM node:24-alpine

RUN apk add --no-cache dumb-init \
    && adduser -S nodejs

USER nodejs

RUN mkdir -p /home/nodejs/app
WORKDIR /home/nodejs/app

COPY package*.json ./
RUN npm ci --omit=dev

COPY . .

EXPOSE 3000

ENV NODE_ENV=production

CMD ["dumb-init", "node", "bin/www"]

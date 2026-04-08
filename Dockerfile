FROM node:22-alpine

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install

COPY . .

RUN npx prisma generate

ENV NODE_OPTIONS=--max-old-space-size=1024
RUN npm run build

ENV NODE_ENV=production
ENV PORT=10000
EXPOSE 10000

COPY docker-entrypoint.sh /
RUN chmod +x /docker-entrypoint.sh
CMD ["/docker-entrypoint.sh"]

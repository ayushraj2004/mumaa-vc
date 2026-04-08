FROM node:22-alpine

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install

COPY . .

# Generate Prisma client (no DB connection needed)
RUN npx prisma generate

# Build Next.js — use dummy DB URL so Prisma doesn't fail at build time
ENV DATABASE_URL=postgresql://dummy:dummy@localhost:5432/dummy
ENV NODE_OPTIONS=--max-old-space-size=1024
RUN npx next build

ENV NODE_ENV=production
ENV PORT=10000
EXPOSE 10000

COPY docker-entrypoint.sh /
RUN chmod +x /docker-entrypoint.sh
CMD ["/docker-entrypoint.sh"]

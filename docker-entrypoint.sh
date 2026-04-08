#!/bin/sh
echo "Pushing database schema..."
./node_modules/.bin/prisma db push --skip-generate --accept-data-loss 2>&1 || true
echo "Starting Next.js..."
exec node .next/standalone/server.js

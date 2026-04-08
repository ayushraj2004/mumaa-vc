#!/bin/sh
echo "Pushing database schema..."
./node_modules/.bin/prisma db push --skip-generate --accept-data-loss 2>&1 || true
echo "Starting Next.js..."
exec ./node_modules/.bin/next start -H 0.0.0.0 -p ${PORT:-10000}

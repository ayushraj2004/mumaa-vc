/**
 * Emit an event to a user via the socket service HTTP API.
 * Uses SOCKET_API_URL env var (set on Vercel/Render dashboard).
 */
export async function emitToUser(toUserId: string, event: string, data: any): Promise<void> {
  const socketUrl = process.env.SOCKET_API_URL || 'http://localhost:3003'
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 5000)
  try {
    await fetch(`${socketUrl}/emit`, {
      method: 'POST',
      signal: controller.signal,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ toUserId, event, data }),
    })
  } finally {
    clearTimeout(timeout)
  }
}

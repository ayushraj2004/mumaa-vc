// ============================================================
// MUMAA Platform - WebRTC Configuration
// ============================================================

/**
 * ICE servers for NAT traversal on all networks (mobile + desktop).
 *
 * TURN credentials are fetched at RUNTIME from /api/config endpoint
 * (server-side env vars) so no NEXT_PUBLIC_ rebuild is needed.
 *
 * For production deployment on Render:
 * - Set SOCKET_API_URL env var on mumaa-web (server-side, no NEXT_PUBLIC_ needed)
 * - Set TURN_URL, TURN_USERNAME, TURN_CREDENTIAL env vars on mumaa-web
 *
 * Without TURN: STUN works when both users have favorable NAT
 * With TURN: Works on ALL networks including strict mobile NAT
 */

export async function getIceServers(): Promise<RTCConfiguration> {
  const servers: RTCIceServer[] = [
    // STUN servers
    { urls: 'stun:stun.l.google.com:19302' },
    { urls: 'stun:stun1.l.google.com:19302' },
    { urls: 'stun:stun.relay.metered.ca:80' },
    // Metered.ca TURN servers (works across all networks)
    {
      urls: 'turn:global.relay.metered.ca:80',
      username: 'c98a0be62b77a83c0a53b3b4f7878e8bcf8a',
      credential: 'powwjWVZKCPP1PQA',
    },
    {
      urls: 'turn:global.relay.metered.ca:80?transport=tcp',
      username: 'c98a0be62b77a83c0a53b3b4f7878e8bcf8a',
      credential: 'powwjWVZKCPP1PQA',
    },
    {
      urls: 'turn:global.relay.metered.ca:443',
      username: 'c98a0be62b77a83c0a53b3b4f7878e8bcf8a',
      credential: 'powwjWVZKCPP1PQA',
    },
    {
      urls: 'turns:global.relay.metered.ca:443?transport=tcp',
      username: 'c98a0be62b77a83c0a53b3b4f7878e8bcf8a',
      credential: 'powwjWVZKCPP1PQA',
    },
  ]

  console.log('[WebRTC] ICE servers configured with Metered.ca TURN')
  return { iceServers: servers, iceCandidatePoolSize: 10 }
}

/**
 * Default media constraints for getUserMedia.
 */
export const DEFAULT_MEDIA_CONSTRAINTS: MediaStreamConstraints = {
  audio: {
    echoCancellation: true,
    noiseSuppression: true,
    autoGainControl: true,
  },
  video: {
    width: { ideal: 1280, min: 640 },
    height: { ideal: 720, min: 480 },
    frameRate: { ideal: 30, min: 15 },
    facingMode: 'user',
  },
}

/**
 * Audio-only constraints for when video is off.
 */
export const AUDIO_ONLY_CONSTRAINTS: MediaStreamConstraints = {
  audio: {
    echoCancellation: true,
    noiseSuppression: true,
    autoGainControl: true,
  },
  video: false,
}

/**
 * Generate a room/call ID for identification.
 */
export function generateCallId(callId: string): string {
  return `mumaa-${callId}`
}

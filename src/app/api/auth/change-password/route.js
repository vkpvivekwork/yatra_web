import { NextResponse } from 'next/server'
import { validateToken, validateCredentials, ADMIN_INFO } from '@/lib/auth'

// ─── POST /api/auth/change-password ───────────────────────────
export async function POST(request) {
  if (!validateToken(request)) {
    return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 })
  }

  // Password change requires editing .env.local / env vars on the server
  // For now, return a guidance message
  return NextResponse.json({
    success: false,
    message: 'To change the password, update the ADMIN_PASSWORD value in your .env.local file and restart the server.',
  }, { status: 400 })
}

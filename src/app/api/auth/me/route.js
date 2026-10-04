import { NextResponse } from 'next/server'
import { validateToken, ADMIN_INFO } from '@/lib/auth'

// ─── GET /api/auth/me ─────────────────────────────────────────
export async function GET(request) {
  if (!validateToken(request)) {
    return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 })
  }

  return NextResponse.json({ success: true, admin: ADMIN_INFO })
}

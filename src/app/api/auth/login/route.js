import { NextResponse } from 'next/server'
import { validateCredentials, getToken, ADMIN_INFO } from '@/lib/auth'

// ─── POST /api/auth/login ──────────────────────────────────────
export async function POST(request) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json({ success: false, message: 'Email and password are required' }, { status: 400 })
    }

    if (!validateCredentials(email, password)) {
      return NextResponse.json({ success: false, message: 'Invalid email or password' }, { status: 401 })
    }

    return NextResponse.json({
      success: true,
      token: getToken(),
      admin: { ...ADMIN_INFO, email },
    })
  } catch (err) {
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 })
  }
}

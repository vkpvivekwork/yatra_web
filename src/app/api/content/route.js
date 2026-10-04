import { NextResponse } from 'next/server'
import { readDB, writeDB } from '@/lib/db'
import { validateToken } from '@/lib/auth'

export async function GET() {
  const data = readDB('content')
  return NextResponse.json({ success: true, data })
}

export async function PUT(request) {
  if (!validateToken(request)) return NextResponse.json({ success: false }, { status: 401 })
  const body = await request.json()
  const data = readDB('content')
  const updated = { ...data, ...(body.updates || body) }
  writeDB('content', updated)
  return NextResponse.json({ success: true, data: updated })
}

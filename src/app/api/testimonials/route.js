import { NextResponse } from 'next/server'
import { readDB, writeDB, generateId } from '@/lib/db'
import { validateToken } from '@/lib/auth'

export async function GET() {
  const data = readDB('testimonials')
  return NextResponse.json({ success: true, data })
}

export async function POST(request) {
  if (!validateToken(request)) {
    return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 })
  }
  const body = await request.json()
  const data = readDB('testimonials')
  const item = { id: generateId(), ...body, created_at: new Date().toISOString() }
  data.push(item)
  writeDB('testimonials', data)
  return NextResponse.json({ success: true, data: item }, { status: 201 })
}

import { NextResponse } from 'next/server'
import { readDB, writeDB } from '@/lib/db'
import { validateToken } from '@/lib/auth'

export async function PUT(request, { params }) {
  if (!validateToken(request)) return NextResponse.json({ success: false }, { status: 401 })
  const body = await request.json()
  const data = readDB('whyus')
  const idx = data.findIndex(w => w.id === params.id)
  if (idx === -1) return NextResponse.json({ success: false }, { status: 404 })
  data[idx] = { ...data[idx], ...body }
  writeDB('whyus', data)
  return NextResponse.json({ success: true, data: data[idx] })
}

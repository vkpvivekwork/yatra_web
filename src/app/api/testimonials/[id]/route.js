import { NextResponse } from 'next/server'
import { readDB, writeDB } from '@/lib/db'
import { validateToken } from '@/lib/auth'

export async function PUT(request, { params }) {
  if (!validateToken(request)) return NextResponse.json({ success: false }, { status: 401 })
  const body = await request.json()
  const data = readDB('testimonials')
  const idx = data.findIndex(t => t.id === params.id)
  if (idx === -1) return NextResponse.json({ success: false }, { status: 404 })
  data[idx] = { ...data[idx], ...body }
  writeDB('testimonials', data)
  return NextResponse.json({ success: true, data: data[idx] })
}

export async function DELETE(request, { params }) {
  if (!validateToken(request)) return NextResponse.json({ success: false }, { status: 401 })
  const data = readDB('testimonials')
  writeDB('testimonials', data.filter(t => t.id !== params.id))
  return NextResponse.json({ success: true })
}

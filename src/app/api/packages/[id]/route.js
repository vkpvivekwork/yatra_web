import { NextResponse } from 'next/server'
import { readDB, writeDB } from '@/lib/db'
import { validateToken } from '@/lib/auth'

export async function PUT(request, { params }) {
  if (!validateToken(request)) {
    return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 })
  }
  const body = await request.json()
  const packages = readDB('packages')
  const idx = packages.findIndex(p => p.id === params.id)
  if (idx === -1) return NextResponse.json({ success: false, message: 'Not found' }, { status: 404 })
  packages[idx] = { ...packages[idx], ...body, updated_at: new Date().toISOString() }
  writeDB('packages', packages)
  return NextResponse.json({ success: true, data: packages[idx] })
}

export async function DELETE(request, { params }) {
  if (!validateToken(request)) {
    return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 })
  }
  const packages = readDB('packages')
  writeDB('packages', packages.filter(p => p.id !== params.id))
  return NextResponse.json({ success: true })
}

import { NextResponse } from 'next/server'
import { readDB, writeDB } from '@/lib/db'
import { validateToken } from '@/lib/auth'

// ─── PUT /api/enquiries/[id] — Update status / notes ──────────
export async function PUT(request, { params }) {
  if (!validateToken(request)) {
    return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 })
  }

  const { id } = params
  const body = await request.json()

  const enquiries = readDB('enquiries')
  const idx = enquiries.findIndex(e => e.id === id)

  if (idx === -1) {
    return NextResponse.json({ success: false, message: 'Enquiry not found' }, { status: 404 })
  }

  enquiries[idx] = {
    ...enquiries[idx],
    ...(body.status !== undefined && { status: body.status }),
    ...(body.admin_notes !== undefined && { admin_notes: body.admin_notes }),
    updated_at: new Date().toISOString(),
  }

  writeDB('enquiries', enquiries)

  return NextResponse.json({ success: true, enquiry: enquiries[idx] })
}

// ─── DELETE /api/enquiries/[id] — Delete enquiry ──────────────
export async function DELETE(request, { params }) {
  if (!validateToken(request)) {
    return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 })
  }

  const { id } = params
  const enquiries = readDB('enquiries')
  const filtered = enquiries.filter(e => e.id !== id)

  if (filtered.length === enquiries.length) {
    return NextResponse.json({ success: false, message: 'Enquiry not found' }, { status: 404 })
  }

  writeDB('enquiries', filtered)

  return NextResponse.json({ success: true, message: 'Deleted successfully' })
}

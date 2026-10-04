import { NextResponse } from 'next/server'
import { readDB, writeDB, generateId, today } from '@/lib/db'
import { validateToken } from '@/lib/auth'

// ─── GET /api/enquiries — Fetch all (admin only) ───────────────
export async function GET(request) {
  if (!validateToken(request)) {
    return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const status = searchParams.get('status') || ''
  const service = searchParams.get('service') || ''
  const search = searchParams.get('search') || ''

  let enquiries = readDB('enquiries')

  // Apply filters
  if (status) enquiries = enquiries.filter(e => e.status === status)
  if (service) enquiries = enquiries.filter(e => e.service_type === service)
  if (search) {
    const q = search.toLowerCase()
    enquiries = enquiries.filter(e =>
      (e.name || '').toLowerCase().includes(q) ||
      (e.phone || '').includes(q) ||
      (e.message || '').toLowerCase().includes(q) ||
      (e.source || '').toLowerCase().includes(q)
    )
  }

  // Sort newest first
  enquiries = enquiries.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))

  // Build stats from the FULL dataset (not filtered)
  const all = readDB('enquiries')
  const todayStr = today()
  const stats = {
    total_enquiries: all.length,
    today_enquiries: all.filter(e => e.created_at?.startsWith(todayStr)).length,
    new_enquiries: all.filter(e => e.status === 'New').length,
    contacted: all.filter(e => e.status === 'Contacted').length,
    confirmed: all.filter(e => e.status === 'Confirmed').length,
    cancelled: all.filter(e => e.status === 'Cancelled').length,
  }

  return NextResponse.json({
    success: true,
    data: enquiries,
    stats,
    total: enquiries.length,
  })
}

// ─── POST /api/enquiries — Save new enquiry (public) ──────────
export async function POST(request) {
  try {
    const body = await request.json()

    if (!body.name || !body.phone) {
      return NextResponse.json({ success: false, message: 'Name and phone are required' }, { status: 400 })
    }

    const enquiries = readDB('enquiries')
    const newEnquiry = {
      id: generateId(),
      name: body.name || '',
      phone: body.phone || '',
      email: body.email || '',
      travel_date: body.travel_date || '',
      service_type: body.service_type || 'general',
      passengers: body.passengers || '',
      message: body.message || '',
      source: body.source || 'unknown',
      admin_notes: '',
      status: 'New',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }

    enquiries.push(newEnquiry)
    writeDB('enquiries', enquiries)

    return NextResponse.json({ success: true, enquiry: newEnquiry }, { status: 201 })
  } catch (err) {
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 })
  }
}

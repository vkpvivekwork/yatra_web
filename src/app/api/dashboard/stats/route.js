import { NextResponse } from 'next/server'
import { readDB, today } from '@/lib/db'
import { validateToken } from '@/lib/auth'

// ─── GET /api/dashboard/stats ─────────────────────────────────
export async function GET(request) {
  if (!validateToken(request)) {
    return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 })
  }

  const enquiries = readDB('enquiries')
  const todayStr = today()

  // Last 7 days for chart
  const last7 = []
  for (let i = 6; i >= 0; i--) {
    const d = new Date()
    d.setDate(d.getDate() - i)
    const dateStr = d.toISOString().split('T')[0]
    last7.push({
      date: dateStr,
      count: enquiries.filter(e => e.created_at?.startsWith(dateStr)).length,
    })
  }

  // Service breakdown
  const byService = {}
  enquiries.forEach(e => {
    const key = e.service_type || 'general'
    byService[key] = (byService[key] || 0) + 1
  })

  const stats = {
    total_enquiries: enquiries.length,
    today_enquiries: enquiries.filter(e => e.created_at?.startsWith(todayStr)).length,
    new_enquiries: enquiries.filter(e => e.status === 'New').length,
    contacted: enquiries.filter(e => e.status === 'Contacted').length,
    confirmed: enquiries.filter(e => e.status === 'Confirmed').length,
    cancelled: enquiries.filter(e => e.status === 'Cancelled').length,
    last_7_days: last7,
    by_service: byService,
  }

  return NextResponse.json({ success: true, stats })
}

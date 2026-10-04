import { NextResponse } from 'next/server'
import { readDB, writeDB } from '@/lib/db'
import { validateToken } from '@/lib/auth'

const DEFAULT_WHYUS = [
  { id: '1', title: 'Trusted Since 2015', description: '10+ years serving pilgrims' },
  { id: '2', title: '24/7 Support', description: 'Round-the-clock assistance' },
  { id: '3', title: 'Local Expertise', description: 'Deep knowledge of Varanasi' },
]

export async function GET() {
  const data = readDB('whyus')
  return NextResponse.json({ success: true, data: data.length ? data : DEFAULT_WHYUS })
}

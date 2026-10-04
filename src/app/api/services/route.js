import { NextResponse } from 'next/server'
import { readDB, writeDB } from '@/lib/db'
import { validateToken } from '@/lib/auth'

const DEFAULT_SERVICES = [
  { id: '1', title: 'Cab Service', description: 'Outstation & local cab booking', icon: '🚗' },
  { id: '2', title: 'Boating', description: 'Ganga boat rides & tours', icon: '⛵' },
  { id: '3', title: 'Tour Packages', description: 'Pilgrimage & heritage packages', icon: '🧳' },
]

export async function GET() {
  const data = readDB('services')
  return NextResponse.json({ success: true, data: data.length ? data : DEFAULT_SERVICES })
}

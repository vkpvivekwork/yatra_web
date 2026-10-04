import { NextResponse } from 'next/server'
import { readDB, writeDB, generateId } from '@/lib/db'
import { validateToken } from '@/lib/auth'

export async function GET(request) {
  const packages = readDB('packages')
  return NextResponse.json({ success: true, data: packages })
}

export async function POST(request) {
  if (!validateToken(request)) {
    return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 })
  }
  const body = await request.json()
  const packages = readDB('packages')
  const newPkg = { id: generateId(), ...body, created_at: new Date().toISOString() }
  packages.push(newPkg)
  writeDB('packages', packages)
  return NextResponse.json({ success: true, data: newPkg }, { status: 201 })
}

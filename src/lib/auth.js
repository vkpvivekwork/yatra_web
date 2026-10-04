// Simple auth helper for API routes

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@yatraksathi.com'
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'Admin@123'
const ADMIN_TOKEN = process.env.ADMIN_SECRET_TOKEN || 'yatra_admin_secret_2024'

export function validateCredentials(email, password) {
  return email === ADMIN_EMAIL && password === ADMIN_PASSWORD
}

export function getToken() {
  return ADMIN_TOKEN
}

export function validateToken(req) {
  const auth = req.headers.get('authorization') || ''
  const token = auth.replace('Bearer ', '').trim()
  return token === ADMIN_TOKEN
}

export const ADMIN_INFO = {
  name: 'Admin',
  email: ADMIN_EMAIL,
  role: 'admin',
}

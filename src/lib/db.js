// Simple JSON file database utility
import fs from 'fs'
import path from 'path'

const DATA_DIR = path.join(process.cwd(), 'data')

function getFilePath(name) {
  return path.join(DATA_DIR, `${name}.json`)
}

function ensureDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true })
  }
}

export function readDB(name) {
  ensureDir()
  const file = getFilePath(name)
  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, JSON.stringify([]))
    return []
  }
  try {
    const raw = fs.readFileSync(file, 'utf-8')
    return JSON.parse(raw)
  } catch {
    return []
  }
}

export function writeDB(name, data) {
  ensureDir()
  fs.writeFileSync(getFilePath(name), JSON.stringify(data, null, 2))
}

export function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 5)
}

export function today() {
  return new Date().toISOString().split('T')[0]
}

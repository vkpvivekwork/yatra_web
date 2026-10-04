'use client'
import { useState, useEffect, useCallback } from 'react'
import { adminLogin, getAdminMe, getDashboardStats, getEnquiries, updateEnquiry, deleteEnquiry,
  getPackages, createPackage, updatePackage, deletePackage,
  getTestimonials, createTestimonial, updateTestimonial, deleteTestimonial,
  getPageContent, updatePageContent, getServices, updateService, getWhyUs, updateWhyUs,
  changePassword } from '@/lib/api'

// ─── Shared UI Helpers ────────────────────────────────────────
const statusColors = { New: 'bg-blue-100 text-blue-700', Contacted: 'bg-yellow-100 text-yellow-700', Confirmed: 'bg-green-100 text-green-700', Cancelled: 'bg-red-100 text-red-700' }
const btn = (variant = 'primary', size = 'md', extra = '') => {
  const variants = { primary: 'bg-[#ea2330] text-white hover:bg-red-700', secondary: 'bg-gray-100 text-gray-700 hover:bg-gray-200', danger: 'bg-red-100 text-red-700 hover:bg-red-200', success: 'bg-green-100 text-green-700 hover:bg-green-200', dark: 'bg-gray-800 text-white hover:bg-gray-900' }
  const sizes = { sm: 'px-3 py-1.5 text-xs', md: 'px-4 py-2 text-sm', lg: 'px-6 py-3 text-base' }
  return `${variants[variant]} ${sizes[size]} rounded-lg font-medium transition disabled:opacity-50 ${extra}`
}

// ─── Login Page ───────────────────────────────────────────────
function LoginPage({ onLogin }) {
  const [form, setForm] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    const res = await adminLogin(form.email, form.password)
    setLoading(false)
    if (res.ok && res.data.success) {
      localStorage.setItem('admin_token', res.data.token)
      localStorage.setItem('admin_info', JSON.stringify(res.data.admin))
      onLogin(res.data.admin)
    } else {
      setError(res.data.message || 'Login failed. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[#ea2330] rounded-2xl flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white">Admin Login</h1>
          <p className="text-gray-400 mt-2">Yatra K Sathi Dashboard</p>
        </div>
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input type="email" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                placeholder="admin@yatraksathi.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ea2330]" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input type="password" value={form.password} onChange={e => setForm(p => ({ ...p, password: e.target.value }))}
                placeholder="Enter password"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ea2330]" required />
            </div>
            {error && <p className="text-red-500 text-sm bg-red-50 px-3 py-2 rounded-lg">{error}</p>}
            <button type="submit" disabled={loading}
              className={btn('primary', 'lg', 'w-full')}>
              {loading ? 'Logging in...' : '🔐 Login to Dashboard'}
            </button>
          </form>
          <p className="text-center text-gray-400 text-xs mt-4">Default: admin@yatraksathi.com / Admin@123</p>
        </div>
      </div>
    </div>
  )
}

// ─── Stats Cards ──────────────────────────────────────────────
function StatCard({ label, value, color, icon }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center mb-3`}>
        <span className="text-2xl">{icon}</span>
      </div>
      <p className="text-3xl font-bold text-gray-800">{value ?? '—'}</p>
      <p className="text-gray-500 text-sm mt-1">{label}</p>
    </div>
  )
}

// ─── Enquiries Tab ────────────────────────────────────────────
function EnquiriesTab() {
  const [enquiries, setEnquiries] = useState([])
  const [stats, setStats] = useState({})
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState({ status: '', service: '', search: '' })
  const [selected, setSelected] = useState(null)
  const [editNotes, setEditNotes] = useState('')
  const [editStatus, setEditStatus] = useState('')
  const [saving, setSaving] = useState(false)

  const load = useCallback(async () => {
    setLoading(true)
    const params = new URLSearchParams()
    if (filter.status) params.set('status', filter.status)
    if (filter.service) params.set('service', filter.service)
    if (filter.search) params.set('search', filter.search)
    const res = await getEnquiries(params.toString())
    if (res.ok) { setEnquiries(res.data.data); setStats(res.data.stats || {}) }
    setLoading(false)
  }, [filter])

  useEffect(() => { load() }, [load])

  const handleUpdate = async () => {
    setSaving(true)
    await updateEnquiry(selected.id, { status: editStatus, admin_notes: editNotes })
    setSaving(false)
    setSelected(null)
    load()
  }

  const handleDelete = async (id) => {
    if (!confirm('Delete this enquiry?')) return
    await deleteEnquiry(id)
    load()
  }

  return (
    <div>
      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
        {[
          { label: 'Total', value: stats.total_enquiries, color: 'bg-blue-100', icon: '📋' },
          { label: 'Today', value: stats.today_enquiries, color: 'bg-purple-100', icon: '📅' },
          { label: 'New', value: stats.new_enquiries, color: 'bg-orange-100', icon: '🔔' },
          { label: 'Contacted', value: stats.contacted, color: 'bg-yellow-100', icon: '📞' },
          { label: 'Confirmed', value: stats.confirmed, color: 'bg-green-100', icon: '✅' },
        ].map(s => (
          <div key={s.label} className={`${s.color} rounded-2xl p-4`}>
            <p className="text-2xl font-bold text-gray-800">{s.value ?? 0}</p>
            <p className="text-gray-600 text-sm">{s.icon} {s.label}</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl p-4 mb-4 flex flex-wrap gap-3 shadow-sm border border-gray-100">
        <input type="text" placeholder="🔍 Search name, mobile, email..."
          value={filter.search} onChange={e => setFilter(p => ({ ...p, search: e.target.value }))}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330] flex-1 min-w-48" />
        <select value={filter.status} onChange={e => setFilter(p => ({ ...p, status: e.target.value }))}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]">
          <option value="">All Status</option>
          <option value="New">New</option>
          <option value="Contacted">Contacted</option>
          <option value="Confirmed">Confirmed</option>
          <option value="Cancelled">Cancelled</option>
        </select>
        <select value={filter.service} onChange={e => setFilter(p => ({ ...p, service: e.target.value }))}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]">
          <option value="">All Services</option>
          <option value="Tour Package">Tour Package</option>
          <option value="Taxi Service">Taxi Service</option>
          <option value="Hotel Booking">Hotel Booking</option>
        </select>
        <button onClick={load} className={btn('secondary', 'sm')}>Refresh</button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-gray-500">Loading enquiries...</div>
        ) : enquiries.length === 0 ? (
          <div className="p-12 text-center text-gray-400">
            <p className="text-5xl mb-3">📭</p>
            <p>No enquiries found.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  {['#', 'Name', 'Mobile', 'Service', 'Source', 'Date', 'Status', 'Actions'].map(h => (
                    <th key={h} className="px-4 py-3 text-left font-semibold text-gray-600 whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {enquiries.map((e) => (
                  <tr key={e.id} className="hover:bg-gray-50 transition">
                    <td className="px-4 py-3 text-gray-400">#{e.id}</td>
                    <td className="px-4 py-3 font-medium text-gray-800">{e.name}</td>
                    <td className="px-4 py-3">
                      <a href={`tel:${e.mobile}`} className="text-[#ea2330] hover:underline">{e.mobile}</a>
                    </td>
                    <td className="px-4 py-3 text-gray-600">{e.service}</td>
                    <td className="px-4 py-3">
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">{e.source?.replace('_', ' ')}</span>
                    </td>
                    <td className="px-4 py-3 text-gray-500 whitespace-nowrap">
                      {new Date(e.created_at).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                    </td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[e.status] || 'bg-gray-100 text-gray-600'}`}>
                        {e.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <button onClick={() => { setSelected(e); setEditStatus(e.status); setEditNotes(e.admin_notes || '') }}
                          className={btn('secondary', 'sm')}>Edit</button>
                        <button onClick={() => handleDelete(e.id)} className={btn('danger', 'sm')}>Del</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Edit Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-gray-800">Enquiry #{selected.id}</h3>
              <button onClick={() => setSelected(null)} className="text-gray-400 hover:text-gray-600 text-xl">✕</button>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 mb-4 text-sm space-y-2">
              <p><span className="font-medium">Name:</span> {selected.name}</p>
              <p><span className="font-medium">Mobile:</span> <a href={`tel:${selected.mobile}`} className="text-[#ea2330]">{selected.mobile}</a></p>
              {selected.email && <p><span className="font-medium">Email:</span> {selected.email}</p>}
              {selected.destination && <p><span className="font-medium">Destination:</span> {selected.destination}</p>}
              <p><span className="font-medium">Service:</span> {selected.service}</p>
              {selected.travel_date && <p><span className="font-medium">Travel Date:</span> {new Date(selected.travel_date).toLocaleDateString('en-IN')}</p>}
              {selected.message && <p><span className="font-medium">Message:</span> {selected.message}</p>}
            </div>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select value={editStatus} onChange={e => setEditStatus(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ea2330] text-sm">
                  <option value="New">New</option>
                  <option value="Contacted">Contacted</option>
                  <option value="Confirmed">Confirmed</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Admin Notes</label>
                <textarea value={editNotes} onChange={e => setEditNotes(e.target.value)}
                  rows={3} placeholder="Add internal notes..."
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ea2330] text-sm" />
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              <button onClick={handleUpdate} disabled={saving} className={btn('primary', 'md', 'flex-1')}>
                {saving ? 'Saving...' : 'Save Changes'}
              </button>
              <button onClick={() => setSelected(null)} className={btn('secondary', 'md', 'flex-1')}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Packages Tab ─────────────────────────────────────────────
function PackagesTab() {
  const [packages, setPackages] = useState([])
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState(null)
  const [saving, setSaving] = useState(false)
  const [msg, setMsg] = useState('')

  const emptyPkg = { title: '', location: '', category: '', duration: '', price: '', original_price: '', image_url: '', description: '', is_featured: 0, is_active: 1, sort_order: 0 }

  const load = async () => {
    setLoading(true)
    const res = await getPackages('active=')
    if (res.ok) setPackages(res.data.data || [])
    setLoading(false)
  }

  useEffect(() => { load() }, [])

  const handleSave = async () => {
    setSaving(true)
    const res = editing.id
      ? await updatePackage(editing.id, editing)
      : await createPackage(editing)
    setSaving(false)
    if (res.ok) { setMsg('✅ Saved!'); setEditing(null); load() }
    else setMsg('❌ Error: ' + res.data.message)
    setTimeout(() => setMsg(''), 3000)
  }

  const handleDelete = async (id) => {
    if (!confirm('Delete this package?')) return
    await deletePackage(id)
    load()
  }

  return (
    <div>
      {msg && <div className="mb-4 px-4 py-3 bg-blue-50 text-blue-700 rounded-xl text-sm">{msg}</div>}
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-gray-700">Tour Packages ({packages.length})</h3>
        <button onClick={() => setEditing(emptyPkg)} className={btn('primary', 'md')}>+ Add Package</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {loading ? <p className="text-gray-500">Loading...</p> : packages.map(pkg => (
          <div key={pkg.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="relative h-36">
              {pkg.image_url && <img src={pkg.image_url} alt={pkg.title} className="w-full h-full object-cover" />}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                <span className={`text-xs px-2 py-1 rounded-full ${pkg.is_active ? 'bg-green-500 text-white' : 'bg-gray-500 text-white'}`}>
                  {pkg.is_active ? 'Active' : 'Inactive'}
                </span>
              </div>
            </div>
            <div className="p-4">
              <h4 className="font-bold text-gray-800 text-sm mb-1">{pkg.title}</h4>
              <p className="text-gray-500 text-xs">{pkg.duration} • ₹{Number(pkg.price).toLocaleString('en-IN')}</p>
              <div className="flex gap-2 mt-3">
                <button onClick={() => setEditing({ ...pkg })} className={btn('secondary', 'sm', 'flex-1')}>Edit</button>
                <button onClick={() => handleDelete(pkg.id)} className={btn('danger', 'sm', 'flex-1')}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      {editing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 overflow-y-auto py-8">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-6 my-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">{editing.id ? 'Edit Package' : 'New Package'}</h3>
              <button onClick={() => setEditing(null)} className="text-gray-400 text-xl">✕</button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                ['title', 'Package Title', 'text', 'col-span-2'],
                ['location', 'Location', 'text', ''],
                ['category', 'Category Label', 'text', ''],
                ['duration', 'Duration', 'text', ''],
                ['price', 'Price (₹)', 'number', ''],
                ['original_price', 'Original Price (₹)', 'number', ''],
                ['image_url', 'Image URL', 'url', 'col-span-2'],
              ].map(([key, label, type, cls]) => (
                <div key={key} className={cls}>
                  <label className="block text-xs font-medium text-gray-600 mb-1">{label}</label>
                  <input type={type} value={editing[key] || ''} onChange={e => setEditing(p => ({ ...p, [key]: e.target.value }))}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]" />
                </div>
              ))}
              <div className="col-span-2">
                <label className="block text-xs font-medium text-gray-600 mb-1">Description</label>
                <textarea value={editing.description || ''} onChange={e => setEditing(p => ({ ...p, description: e.target.value }))}
                  rows={3} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]" />
              </div>
              <div className="flex gap-4 col-span-2">
                <label className="flex items-center gap-2 text-sm cursor-pointer">
                  <input type="checkbox" checked={!!editing.is_featured} onChange={e => setEditing(p => ({ ...p, is_featured: e.target.checked ? 1 : 0 }))} className="w-4 h-4" />
                  Featured
                </label>
                <label className="flex items-center gap-2 text-sm cursor-pointer">
                  <input type="checkbox" checked={!!editing.is_active} onChange={e => setEditing(p => ({ ...p, is_active: e.target.checked ? 1 : 0 }))} className="w-4 h-4" />
                  Active
                </label>
              </div>
            </div>
            <div className="flex gap-3 mt-5">
              <button onClick={handleSave} disabled={saving} className={btn('primary', 'md', 'flex-1')}>
                {saving ? 'Saving...' : 'Save Package'}
              </button>
              <button onClick={() => setEditing(null)} className={btn('secondary', 'md', 'flex-1')}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Testimonials Tab ─────────────────────────────────────────
function TestimonialsTab() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState(null)
  const [saving, setSaving] = useState(false)
  const [msg, setMsg] = useState('')

  const empty = { name: '', location: '', rating: 5, review: '', avatar_url: '', is_active: 1 }

  const load = async () => {
    setLoading(true)
    const res = await getTestimonials()
    if (res.ok) setItems(res.data.data || [])
    setLoading(false)
  }

  useEffect(() => { load() }, [])

  const handleSave = async () => {
    setSaving(true)
    const res = editing.id ? await updateTestimonial(editing.id, editing) : await createTestimonial(editing)
    setSaving(false)
    if (res.ok) { setMsg('✅ Saved!'); setEditing(null); load() }
    else setMsg('❌ ' + res.data.message)
    setTimeout(() => setMsg(''), 3000)
  }

  return (
    <div>
      {msg && <div className="mb-4 px-4 py-3 bg-blue-50 text-blue-700 rounded-xl text-sm">{msg}</div>}
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-gray-700">Testimonials ({items.length})</h3>
        <button onClick={() => setEditing(empty)} className={btn('primary', 'md')}>+ Add Review</button>
      </div>
      <div className="space-y-3">
        {loading ? <p className="text-gray-500">Loading...</p> : items.map(t => (
          <div key={t.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex gap-4 items-start">
            <img src={t.avatar_url || 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60'} alt={t.name}
              className="w-12 h-12 rounded-full object-cover shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="font-bold text-gray-800 text-sm">{t.name} <span className="text-gray-400 font-normal">• {t.location}</span></p>
              <div className="flex">{[...Array(t.rating || 5)].map((_, i) => <span key={i} className="text-yellow-400 text-xs">★</span>)}</div>
              <p className="text-gray-600 text-xs mt-1 line-clamp-2">{t.review}</p>
            </div>
            <div className="flex gap-2 shrink-0">
              <button onClick={() => setEditing({ ...t })} className={btn('secondary', 'sm')}>Edit</button>
              <button onClick={async () => { if (confirm('Delete?')) { await deleteTestimonial(t.id); load() } }} className={btn('danger', 'sm')}>Del</button>
            </div>
          </div>
        ))}
      </div>

      {editing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">{editing.id ? 'Edit Review' : 'New Review'}</h3>
              <button onClick={() => setEditing(null)} className="text-gray-400 text-xl">✕</button>
            </div>
            <div className="space-y-3">
              {[['name', 'Name'], ['location', 'Location'], ['avatar_url', 'Avatar URL']].map(([k, l]) => (
                <div key={k}>
                  <label className="block text-xs font-medium text-gray-600 mb-1">{l}</label>
                  <input type="text" value={editing[k] || ''} onChange={e => setEditing(p => ({ ...p, [k]: e.target.value }))}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]" />
                </div>
              ))}
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Rating</label>
                <select value={editing.rating || 5} onChange={e => setEditing(p => ({ ...p, rating: +e.target.value }))}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]">
                  {[5,4,3,2,1].map(r => <option key={r} value={r}>{r} Stars</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Review</label>
                <textarea value={editing.review || ''} onChange={e => setEditing(p => ({ ...p, review: e.target.value }))}
                  rows={4} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]" />
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              <button onClick={handleSave} disabled={saving} className={btn('primary', 'md', 'flex-1')}>
                {saving ? 'Saving...' : 'Save'}
              </button>
              <button onClick={() => setEditing(null)} className={btn('secondary', 'md', 'flex-1')}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Content / CMS Tab ────────────────────────────────────────
function ContentTab() {
  const [rawContent, setRawContent] = useState([])
  const [edits, setEdits] = useState({})
  const [saving, setSaving] = useState(false)
  const [msg, setMsg] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getPageContent().then(res => {
      if (res.ok) {
        setRawContent(res.data.raw || [])
        const map = {}
        res.data.raw?.forEach(r => { map[`${r.page}|${r.section}|${r.key_name}`] = r.value })
        setEdits(map)
      }
      setLoading(false)
    })
  }, [])

  const handleSave = async () => {
    setSaving(true)
    const updates = rawContent.map(r => ({
      page: r.page, section: r.section, key_name: r.key_name,
      value: edits[`${r.page}|${r.section}|${r.key_name}`] ?? r.value
    }))
    const res = await updatePageContent(updates)
    setSaving(false)
    setMsg(res.ok ? '✅ Content updated successfully!' : '❌ ' + res.data.message)
    setTimeout(() => setMsg(''), 4000)
  }

  // Group by page > section
  const grouped = {}
  rawContent.forEach(r => {
    if (!grouped[r.page]) grouped[r.page] = {}
    if (!grouped[r.page][r.section]) grouped[r.page][r.section] = []
    grouped[r.page][r.section].push(r)
  })

  const pageLabels = { home: '🏠 Home Page', site: '⚙️ Site Settings' }
  const sectionLabels = {
    hero: '🎯 Hero Section', services: '🚗 Services Section', packages: '📦 Packages Section',
    whyus: '⭐ Why Choose Us', testimonials: '💬 Testimonials', cta: '📢 CTA Section',
    general: '📋 General Info', popup: '🔔 Popup Settings'
  }

  return (
    <div>
      {msg && <div className="mb-4 px-4 py-3 bg-blue-50 text-blue-700 rounded-xl text-sm">{msg}</div>}
      {loading ? <p className="text-gray-500 p-8 text-center">Loading content...</p> : (
        <>
          <div className="flex justify-end mb-4">
            <button onClick={handleSave} disabled={saving} className={btn('primary', 'md')}>
              {saving ? 'Saving...' : '💾 Save All Changes'}
            </button>
          </div>
          <div className="space-y-6">
            {Object.entries(grouped).map(([page, sections]) => (
              <div key={page} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="bg-gray-50 border-b border-gray-200 px-5 py-3">
                  <h3 className="font-bold text-gray-700">{pageLabels[page] || page}</h3>
                </div>
                <div className="p-5 space-y-6">
                  {Object.entries(sections).map(([section, fields]) => (
                    <div key={section}>
                      <h4 className="font-semibold text-gray-600 text-sm mb-3">{sectionLabels[section] || section}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {fields.map(field => {
                          const key = `${field.page}|${field.section}|${field.key_name}`
                          return (
                            <div key={key}>
                              <label className="block text-xs font-medium text-gray-500 mb-1">{field.label || field.key_name}</label>
                              {field.type === 'boolean' ? (
                                <label className="flex items-center gap-2 cursor-pointer">
                                  <input type="checkbox" checked={edits[key] === '1'}
                                    onChange={e => setEdits(p => ({ ...p, [key]: e.target.checked ? '1' : '0' }))}
                                    className="w-4 h-4 text-[#ea2330]" />
                                  <span className="text-sm text-gray-600">Enabled</span>
                                </label>
                              ) : field.type === 'number' ? (
                                <input type="number" value={edits[key] ?? field.value}
                                  onChange={e => setEdits(p => ({ ...p, [key]: e.target.value }))}
                                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]" />
                              ) : (
                                <input type="text" value={edits[key] ?? field.value}
                                  onChange={e => setEdits(p => ({ ...p, [key]: e.target.value }))}
                                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea2330]" />
                              )}
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

// ─── Settings Tab ─────────────────────────────────────────────
function SettingsTab({ admin, onLogout }) {
  const [form, setForm] = useState({ currentPassword: '', newPassword: '', confirmPassword: '' })
  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState('')

  const handleChange = async (e) => {
    e.preventDefault()
    if (form.newPassword !== form.confirmPassword) { setMsg('❌ New passwords do not match.'); return }
    if (form.newPassword.length < 6) { setMsg('❌ Password must be at least 6 characters.'); return }
    setLoading(true)
    const res = await changePassword(form.currentPassword, form.newPassword)
    setLoading(false)
    setMsg(res.ok ? '✅ Password changed successfully!' : '❌ ' + res.data.message)
    if (res.ok) setForm({ currentPassword: '', newPassword: '', confirmPassword: '' })
    setTimeout(() => setMsg(''), 4000)
  }

  return (
    <div className="max-w-xl">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
        <h3 className="font-bold text-gray-800 mb-4">Account Info</h3>
        <div className="space-y-2 text-sm">
          <p><span className="font-medium text-gray-600">Name:</span> {admin.name}</p>
          <p><span className="font-medium text-gray-600">Email:</span> {admin.email}</p>
          <p><span className="font-medium text-gray-600">Role:</span> <span className="bg-[#ea2330] text-white text-xs px-2 py-1 rounded-full">{admin.role}</span></p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
        <h3 className="font-bold text-gray-800 mb-4">Change Password</h3>
        {msg && <p className="mb-3 text-sm text-blue-700 bg-blue-50 px-3 py-2 rounded-lg">{msg}</p>}
        <form onSubmit={handleChange} className="space-y-4">
          {[
            ['currentPassword', 'Current Password'],
            ['newPassword', 'New Password'],
            ['confirmPassword', 'Confirm New Password'],
          ].map(([k, l]) => (
            <div key={k}>
              <label className="block text-sm font-medium text-gray-700 mb-1">{l}</label>
              <input type="password" value={form[k]} onChange={e => setForm(p => ({ ...p, [k]: e.target.value }))}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ea2330] text-sm" required />
            </div>
          ))}
          <button type="submit" disabled={loading} className={btn('primary', 'md', 'w-full')}>
            {loading ? 'Changing...' : 'Change Password'}
          </button>
        </form>
      </div>

      <button onClick={onLogout} className={btn('danger', 'md', 'w-full')}>
        🚪 Logout from Dashboard
      </button>
    </div>
  )
}

// ─── Dashboard Stats Overview ─────────────────────────────────
function DashboardHome({ admin }) {
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getDashboardStats().then(res => {
      if (res.ok) setStats(res.data.data)
      setLoading(false)
    })
  }, [])

  if (loading) return <div className="text-center py-16 text-gray-500">Loading dashboard...</div>

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Welcome back, {admin.name}! 👋</h2>
        <p className="text-gray-500 text-sm mt-1">Here's your Yatra K Sathi overview</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard label="Total Enquiries" value={stats?.enquiries?.total_enquiries} color="bg-blue-100" icon="📋" />
        <StatCard label="New Leads Today" value={stats?.enquiries?.today_enquiries} color="bg-purple-100" icon="🔔" />
        <StatCard label="Active Packages" value={stats?.packages} color="bg-orange-100" icon="🧳" />
        <StatCard label="Testimonials" value={stats?.testimonials} color="bg-green-100" icon="⭐" />
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
        <h3 className="font-bold text-gray-800 mb-4">Recent Enquiries</h3>
        {stats?.recent_enquiries?.length === 0 ? (
          <p className="text-gray-400 text-sm">No enquiries yet.</p>
        ) : (
          <div className="space-y-3">
            {stats?.recent_enquiries?.map(e => (
              <div key={e.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                <div>
                  <p className="font-medium text-gray-800 text-sm">{e.name}</p>
                  <p className="text-gray-500 text-xs">{e.mobile} • {e.service}</p>
                </div>
                <div className="text-right">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[e.status] || 'bg-gray-100'}`}>{e.status}</span>
                  <p className="text-gray-400 text-xs mt-1">{new Date(e.created_at).toLocaleDateString('en-IN')}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

// ─── Main Admin Dashboard ─────────────────────────────────────
export default function AdminPage() {
  const [admin, setAdmin] = useState(null)
  const [loading, setLoading] = useState(true)
  const [tab, setTab] = useState('dashboard')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('admin_token')
    const info = localStorage.getItem('admin_info')
    if (token && info) {
      getAdminMe().then(res => {
        if (res.ok) setAdmin(res.data.admin)
        else { localStorage.removeItem('admin_token'); localStorage.removeItem('admin_info') }
        setLoading(false)
      })
    } else {
      setLoading(false)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('admin_token')
    localStorage.removeItem('admin_info')
    setAdmin(null)
    setTab('dashboard')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-gray-500">Loading...</div>
      </div>
    )
  }

  if (!admin) return <LoginPage onLogin={setAdmin} />

  const tabs = [
    { id: 'dashboard', label: '📊 Dashboard', icon: '📊' },
    { id: 'enquiries', label: '📋 Enquiries', icon: '📋' },
    { id: 'packages', label: '🧳 Packages', icon: '🧳' },
    { id: 'testimonials', label: '⭐ Reviews', icon: '⭐' },
    { id: 'content', label: '✏️ Page Content', icon: '✏️' },
    { id: 'settings', label: '⚙️ Settings', icon: '⚙️' },
  ]

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-gray-900 transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static`}>
        <div className="p-6 border-b border-gray-800">
          <h2 className="text-white font-bold text-lg">Yatra<span className="text-[#ea2330]">k</span>Sathi</h2>
          <p className="text-gray-400 text-xs mt-1">Admin Panel</p>
        </div>
        <nav className="p-4 space-y-1">
          {tabs.map(t => (
            <button key={t.id} onClick={() => { setTab(t.id); setMenuOpen(false) }}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition ${
                tab === t.id ? 'bg-[#ea2330] text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}>
              {t.label}
            </button>
          ))}
        </nav>
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#ea2330] rounded-full flex items-center justify-center text-white text-xs font-bold">
              {admin.name.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-xs font-medium truncate">{admin.name}</p>
              <p className="text-gray-400 text-xs truncate">{admin.role}</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {menuOpen && <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setMenuOpen(false)} />}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
        {/* Top Bar */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-4 lg:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-gray-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <h1 className="text-lg font-bold text-gray-800">{tabs.find(t => t.id === tab)?.label}</h1>
          </div>
          <div className="flex items-center gap-3">
            <a href="/" target="_blank" className="text-xs text-gray-500 hover:text-[#ea2330] transition">← View Site</a>
            <button onClick={handleLogout} className="text-xs text-gray-500 hover:text-red-500 transition">Logout</button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 lg:p-6 overflow-y-auto">
          {tab === 'dashboard' && <DashboardHome admin={admin} />}
          {tab === 'enquiries' && <EnquiriesTab />}
          {tab === 'packages' && <PackagesTab />}
          {tab === 'testimonials' && <TestimonialsTab />}
          {tab === 'content' && <ContentTab />}
          {tab === 'settings' && <SettingsTab admin={admin} onLogout={handleLogout} />}
        </main>
      </div>
    </div>
  )
}

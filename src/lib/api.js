// API utility for connecting frontend to backend

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

// ─── Helper ──────────────────────────────────────────────────
async function apiCall(endpoint, options = {}) {
  const token = typeof window !== 'undefined' ? localStorage.getItem('admin_token') : null;

  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
    ...options,
  };

  try {
    const res = await fetch(`${API_BASE}${endpoint}`, config);
    const data = await res.json();
    return { ok: res.ok, status: res.status, data };
  } catch (err) {
    return { ok: false, status: 0, data: { success: false, message: 'Network error. Please check your connection.' } };
  }
}

// ─── Enquiries ───────────────────────────────────────────────
export const submitEnquiry = (payload) =>
  apiCall('/enquiries', { method: 'POST', body: JSON.stringify(payload) });

export const getEnquiries = (params = '') =>
  apiCall(`/enquiries${params ? '?' + params : ''}`);

export const updateEnquiry = (id, payload) =>
  apiCall(`/enquiries/${id}`, { method: 'PUT', body: JSON.stringify(payload) });

export const deleteEnquiry = (id) =>
  apiCall(`/enquiries/${id}`, { method: 'DELETE' });

// ─── Auth ────────────────────────────────────────────────────
export const adminLogin = (email, password) =>
  apiCall('/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) });

export const getAdminMe = () => apiCall('/auth/me');

export const changePassword = (currentPassword, newPassword) =>
  apiCall('/auth/change-password', { method: 'POST', body: JSON.stringify({ currentPassword, newPassword }) });

// ─── Content / CMS ───────────────────────────────────────────
export const getPageContent = (page = '') =>
  apiCall(`/content${page ? '?page=' + page : ''}`);

export const updatePageContent = (updates) =>
  apiCall('/content', { method: 'PUT', body: JSON.stringify({ updates }) });

// ─── Packages ────────────────────────────────────────────────
export const getPackages = (params = '') =>
  apiCall(`/packages${params ? '?' + params : ''}`);

export const getPackageById = (id) => apiCall(`/packages/${id}`);

export const createPackage = (payload) =>
  apiCall('/packages', { method: 'POST', body: JSON.stringify(payload) });

export const updatePackage = (id, payload) =>
  apiCall(`/packages/${id}`, { method: 'PUT', body: JSON.stringify(payload) });

export const deletePackage = (id) =>
  apiCall(`/packages/${id}`, { method: 'DELETE' });

// ─── Testimonials ────────────────────────────────────────────
export const getTestimonials = () => apiCall('/testimonials');

export const createTestimonial = (payload) =>
  apiCall('/testimonials', { method: 'POST', body: JSON.stringify(payload) });

export const updateTestimonial = (id, payload) =>
  apiCall(`/testimonials/${id}`, { method: 'PUT', body: JSON.stringify(payload) });

export const deleteTestimonial = (id) =>
  apiCall(`/testimonials/${id}`, { method: 'DELETE' });

// ─── Services & Why Us ───────────────────────────────────────
export const getServices = () => apiCall('/services');
export const getWhyUs = () => apiCall('/whyus');
export const updateService = (id, payload) =>
  apiCall(`/services/${id}`, { method: 'PUT', body: JSON.stringify(payload) });
export const updateWhyUs = (id, payload) =>
  apiCall(`/whyus/${id}`, { method: 'PUT', body: JSON.stringify(payload) });

// ─── Dashboard ───────────────────────────────────────────────
export const getDashboardStats = () => apiCall('/dashboard/stats');

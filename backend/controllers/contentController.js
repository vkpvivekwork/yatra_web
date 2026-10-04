const db = require('../config/db');

// =================== PAGE CONTENT ===================

// GET /api/content?page=home (public)
const getPageContent = async (req, res) => {
  try {
    const { page } = req.query;
    let query = 'SELECT page, section, key_name, value, type, label FROM page_content';
    const params = [];
    if (page) { query += ' WHERE page = ?'; params.push(page); }
    query += ' ORDER BY page, section, key_name';

    const [rows] = await db.query(query, params);

    // Convert to nested object: { page: { section: { key: value } } }
    const result = {};
    rows.forEach(row => {
      if (!result[row.page]) result[row.page] = {};
      if (!result[row.page][row.section]) result[row.page][row.section] = {};
      result[row.page][row.section][row.key_name] = row.value;
    });

    res.json({ success: true, data: result, raw: rows });
  } catch (err) {
    console.error('Get content error:', err);
    res.status(500).json({ success: false, message: 'Server error.' });
  }
};

// PUT /api/content (admin) - Update multiple content keys at once
const updatePageContent = async (req, res) => {
  try {
    const { updates } = req.body; // Array of { page, section, key_name, value }
    if (!Array.isArray(updates) || !updates.length) {
      return res.status(400).json({ success: false, message: 'Updates array is required.' });
    }

    for (const item of updates) {
      await db.query(
        `INSERT INTO page_content (page, section, key_name, value, updated_by)
         VALUES (?, ?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE value = VALUES(value), updated_by = VALUES(updated_by)`,
        [item.page, item.section, item.key_name, item.value, req.admin.id]
      );
    }

    res.json({ success: true, message: `${updates.length} content item(s) updated successfully.` });
  } catch (err) {
    console.error('Update content error:', err);
    res.status(500).json({ success: false, message: 'Server error.' });
  }
};

// =================== PACKAGES ===================

// GET /api/packages (public)
const getPackages = async (req, res) => {
  try {
    const { featured, active = 1 } = req.query;
    let query = 'SELECT * FROM packages WHERE 1=1';
    const params = [];
    if (featured) { query += ' AND is_featured = ?'; params.push(featured); }
    if (active !== undefined) { query += ' AND is_active = ?'; params.push(active); }
    query += ' ORDER BY sort_order ASC, created_at DESC';

    const [rows] = await db.query(query, params);

    // Parse JSON fields
    const parsed = rows.map(r => ({
      ...r,
      highlights: r.highlights ? JSON.parse(r.highlights) : [],
      includes: r.includes ? JSON.parse(r.includes) : [],
      excludes: r.excludes ? JSON.parse(r.excludes) : [],
      itinerary: r.itinerary ? JSON.parse(r.itinerary) : [],
    }));

    res.json({ success: true, data: parsed });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error.' });
  }
};

// GET /api/packages/:id (public)
const getPackage = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM packages WHERE id = ?', [req.params.id]);
    if (!rows.length) return res.status(404).json({ success: false, message: 'Package not found.' });
    const r = rows[0];
    res.json({
      success: true,
      data: {
        ...r,
        highlights: r.highlights ? JSON.parse(r.highlights) : [],
        includes: r.includes ? JSON.parse(r.includes) : [],
        excludes: r.excludes ? JSON.parse(r.excludes) : [],
        itinerary: r.itinerary ? JSON.parse(r.itinerary) : [],
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error.' });
  }
};

// POST /api/packages (admin)
const createPackage = async (req, res) => {
  try {
    const { title, location, category, duration, price, original_price, image_url, description, highlights, includes, excludes, itinerary, is_featured, sort_order } = req.body;
    if (!title || !duration || !price) {
      return res.status(400).json({ success: false, message: 'Title, duration and price are required.' });
    }
    const [result] = await db.query(
      `INSERT INTO packages (title, location, category, duration, price, original_price, image_url, description, highlights, includes, excludes, itinerary, is_featured, sort_order)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [title, location, category, duration, price, original_price || null, image_url || null, description || null,
       JSON.stringify(highlights || []), JSON.stringify(includes || []), JSON.stringify(excludes || []), JSON.stringify(itinerary || []),
       is_featured ? 1 : 0, sort_order || 0]
    );
    res.status(201).json({ success: true, message: 'Package created.', id: result.insertId });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error.' });
  }
};

// PUT /api/packages/:id (admin)
const updatePackage = async (req, res) => {
  try {
    const { title, location, category, duration, price, original_price, image_url, description, highlights, includes, excludes, itinerary, is_featured, is_active, sort_order } = req.body;
    await db.query(
      `UPDATE packages SET title=?, location=?, category=?, duration=?, price=?, original_price=?, image_url=?, description=?,
       highlights=?, includes=?, excludes=?, itinerary=?, is_featured=?, is_active=?, sort_order=? WHERE id=?`,
      [title, location, category, duration, price, original_price || null, image_url || null, description || null,
       JSON.stringify(highlights || []), JSON.stringify(includes || []), JSON.stringify(excludes || []), JSON.stringify(itinerary || []),
       is_featured ? 1 : 0, is_active ? 1 : 0, sort_order || 0, req.params.id]
    );
    res.json({ success: true, message: 'Package updated.' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error.' });
  }
};

// DELETE /api/packages/:id (admin)
const deletePackage = async (req, res) => {
  try {
    await db.query('DELETE FROM packages WHERE id = ?', [req.params.id]);
    res.json({ success: true, message: 'Package deleted.' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error.' });
  }
};

// =================== TESTIMONIALS ===================

// GET /api/testimonials (public)
const getTestimonials = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM testimonials WHERE is_active = 1 ORDER BY sort_order ASC, created_at DESC');
    res.json({ success: true, data: rows });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error.' });
  }
};

// POST /api/testimonials (admin)
const createTestimonial = async (req, res) => {
  try {
    const { name, location, rating, review, avatar_url, sort_order } = req.body;
    if (!name || !review) return res.status(400).json({ success: false, message: 'Name and review required.' });
    const [result] = await db.query(
      'INSERT INTO testimonials (name, location, rating, review, avatar_url, sort_order) VALUES (?, ?, ?, ?, ?, ?)',
      [name, location || null, rating || 5, review, avatar_url || null, sort_order || 0]
    );
    res.status(201).json({ success: true, message: 'Testimonial created.', id: result.insertId });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error.' });
  }
};

// PUT /api/testimonials/:id (admin)
const updateTestimonial = async (req, res) => {
  try {
    const { name, location, rating, review, avatar_url, is_active, sort_order } = req.body;
    await db.query(
      'UPDATE testimonials SET name=?, location=?, rating=?, review=?, avatar_url=?, is_active=?, sort_order=? WHERE id=?',
      [name, location || null, rating || 5, review, avatar_url || null, is_active ? 1 : 0, sort_order || 0, req.params.id]
    );
    res.json({ success: true, message: 'Testimonial updated.' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error.' });
  }
};

// DELETE /api/testimonials/:id (admin)
const deleteTestimonial = async (req, res) => {
  try {
    await db.query('DELETE FROM testimonials WHERE id = ?', [req.params.id]);
    res.json({ success: true, message: 'Testimonial deleted.' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error.' });
  }
};

// =================== SERVICES ===================

// GET /api/services (public)
const getServices = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM services WHERE is_active = 1 ORDER BY sort_order ASC');
    res.json({ success: true, data: rows });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error.' });
  }
};

// PUT /api/services/:id (admin)
const updateService = async (req, res) => {
  try {
    const { title, description, icon, href, is_active, sort_order } = req.body;
    await db.query(
      'UPDATE services SET title=?, description=?, icon=?, href=?, is_active=?, sort_order=? WHERE id=?',
      [title, description, icon || null, href || null, is_active ? 1 : 0, sort_order || 0, req.params.id]
    );
    res.json({ success: true, message: 'Service updated.' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error.' });
  }
};

// GET /api/whyus (public)
const getWhyUs = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM why_us WHERE is_active = 1 ORDER BY sort_order ASC');
    res.json({ success: true, data: rows });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error.' });
  }
};

// PUT /api/whyus/:id (admin)
const updateWhyUs = async (req, res) => {
  try {
    const { title, description, is_active, sort_order } = req.body;
    await db.query(
      'UPDATE why_us SET title=?, description=?, is_active=?, sort_order=? WHERE id=?',
      [title, description, is_active ? 1 : 0, sort_order || 0, req.params.id]
    );
    res.json({ success: true, message: 'Updated.' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error.' });
  }
};

// Dashboard stats
const getDashboardStats = async (req, res) => {
  try {
    const [[enquiryStats]] = await db.query(`
      SELECT
        COUNT(*) as total_enquiries,
        SUM(status = 'New') as new_enquiries,
        SUM(status = 'Contacted') as contacted,
        SUM(status = 'Confirmed') as confirmed,
        SUM(status = 'Cancelled') as cancelled,
        SUM(DATE(created_at) = CURDATE()) as today_enquiries
      FROM enquiries
    `);
    const [[packageStats]] = await db.query(`SELECT COUNT(*) as total FROM packages WHERE is_active = 1`);
    const [[testimonialStats]] = await db.query(`SELECT COUNT(*) as total FROM testimonials WHERE is_active = 1`);
    const [recentEnquiries] = await db.query(`SELECT * FROM enquiries ORDER BY created_at DESC LIMIT 5`);

    res.json({
      success: true,
      data: {
        enquiries: enquiryStats,
        packages: packageStats.total,
        testimonials: testimonialStats.total,
        recent_enquiries: recentEnquiries,
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error.' });
  }
};

module.exports = {
  getPageContent, updatePageContent,
  getPackages, getPackage, createPackage, updatePackage, deletePackage,
  getTestimonials, createTestimonial, updateTestimonial, deleteTestimonial,
  getServices, updateService,
  getWhyUs, updateWhyUs,
  getDashboardStats,
};

const db = require('../config/db');

// POST /api/enquiries - Submit new enquiry (public)
const submitEnquiry = async (req, res) => {
  try {
    const { name, mobile, email, destination, service, travel_date, message, source } = req.body;

    if (!name || !mobile) {
      return res.status(400).json({ success: false, message: 'Name and mobile number are required.' });
    }

    if (mobile.replace(/\D/g, '').length < 10) {
      return res.status(400).json({ success: false, message: 'Please enter a valid mobile number.' });
    }

    const [result] = await db.query(
      `INSERT INTO enquiries (name, mobile, email, destination, service, travel_date, message, source)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        name.trim(),
        mobile.trim(),
        email?.trim() || null,
        destination?.trim() || null,
        service || 'Tour Package',
        travel_date || null,
        message?.trim() || null,
        source || 'contact_form',
      ]
    );

    res.status(201).json({
      success: true,
      message: 'Enquiry submitted successfully! We will contact you soon.',
      id: result.insertId,
    });
  } catch (err) {
    console.error('Submit enquiry error:', err);
    res.status(500).json({ success: false, message: 'Failed to submit enquiry. Please try again.' });
  }
};

// GET /api/enquiries - Get all enquiries (admin only)
const getAllEnquiries = async (req, res) => {
  try {
    const { status, service, source, search, page = 1, limit = 20 } = req.query;
    const offset = (parseInt(page) - 1) * parseInt(limit);

    let whereClause = 'WHERE 1=1';
    const params = [];

    if (status) { whereClause += ' AND status = ?'; params.push(status); }
    if (service) { whereClause += ' AND service = ?'; params.push(service); }
    if (source) { whereClause += ' AND source = ?'; params.push(source); }
    if (search) {
      whereClause += ' AND (name LIKE ? OR mobile LIKE ? OR email LIKE ? OR destination LIKE ?)';
      const s = `%${search}%`;
      params.push(s, s, s, s);
    }

    const [rows] = await db.query(
      `SELECT * FROM enquiries ${whereClause} ORDER BY created_at DESC LIMIT ? OFFSET ?`,
      [...params, parseInt(limit), offset]
    );

    const [[{ total }]] = await db.query(
      `SELECT COUNT(*) as total FROM enquiries ${whereClause}`,
      params
    );

    // Stats
    const [[stats]] = await db.query(`
      SELECT
        COUNT(*) as total,
        SUM(status = 'New') as new_count,
        SUM(status = 'Contacted') as contacted,
        SUM(status = 'Confirmed') as confirmed,
        SUM(status = 'Cancelled') as cancelled
      FROM enquiries
    `);

    res.json({
      success: true,
      data: rows,
      pagination: { total, page: parseInt(page), limit: parseInt(limit), pages: Math.ceil(total / limit) },
      stats,
    });
  } catch (err) {
    console.error('Get enquiries error:', err);
    res.status(500).json({ success: false, message: 'Server error.' });
  }
};

// GET /api/enquiries/:id - Get single enquiry (admin)
const getEnquiry = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM enquiries WHERE id = ?', [req.params.id]);
    if (!rows.length) return res.status(404).json({ success: false, message: 'Enquiry not found.' });
    res.json({ success: true, data: rows[0] });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error.' });
  }
};

// PUT /api/enquiries/:id - Update enquiry status (admin)
const updateEnquiry = async (req, res) => {
  try {
    const { status, admin_notes } = req.body;
    const validStatuses = ['New', 'Contacted', 'Confirmed', 'Cancelled'];

    if (status && !validStatuses.includes(status)) {
      return res.status(400).json({ success: false, message: 'Invalid status value.' });
    }

    await db.query(
      'UPDATE enquiries SET status = COALESCE(?, status), admin_notes = COALESCE(?, admin_notes) WHERE id = ?',
      [status || null, admin_notes !== undefined ? admin_notes : null, req.params.id]
    );

    const [rows] = await db.query('SELECT * FROM enquiries WHERE id = ?', [req.params.id]);
    res.json({ success: true, message: 'Enquiry updated.', data: rows[0] });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error.' });
  }
};

// DELETE /api/enquiries/:id - Delete enquiry (admin)
const deleteEnquiry = async (req, res) => {
  try {
    const [result] = await db.query('DELETE FROM enquiries WHERE id = ?', [req.params.id]);
    if (!result.affectedRows) return res.status(404).json({ success: false, message: 'Enquiry not found.' });
    res.json({ success: true, message: 'Enquiry deleted.' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error.' });
  }
};

module.exports = { submitEnquiry, getAllEnquiries, getEnquiry, updateEnquiry, deleteEnquiry };

const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  submitEnquiry, getAllEnquiries, getEnquiry, updateEnquiry, deleteEnquiry
} = require('../controllers/enquiryController');

// Public route - anyone can submit
router.post('/', submitEnquiry);

// Admin routes
router.get('/', auth, getAllEnquiries);
router.get('/:id', auth, getEnquiry);
router.put('/:id', auth, updateEnquiry);
router.delete('/:id', auth, deleteEnquiry);

module.exports = router;

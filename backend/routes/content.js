const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  getPageContent, updatePageContent,
  getPackages, getPackage, createPackage, updatePackage, deletePackage,
  getTestimonials, createTestimonial, updateTestimonial, deleteTestimonial,
  getServices, updateService,
  getWhyUs, updateWhyUs,
  getDashboardStats,
} = require('../controllers/contentController');

// Page Content
router.get('/content', getPageContent);
router.put('/content', auth, updatePageContent);

// Dashboard Stats (admin)
router.get('/dashboard/stats', auth, getDashboardStats);

// Packages
router.get('/packages', getPackages);
router.get('/packages/:id', getPackage);
router.post('/packages', auth, createPackage);
router.put('/packages/:id', auth, updatePackage);
router.delete('/packages/:id', auth, deletePackage);

// Testimonials
router.get('/testimonials', getTestimonials);
router.post('/testimonials', auth, createTestimonial);
router.put('/testimonials/:id', auth, updateTestimonial);
router.delete('/testimonials/:id', auth, deleteTestimonial);

// Services
router.get('/services', getServices);
router.put('/services/:id', auth, updateService);

// Why Us
router.get('/whyus', getWhyUs);
router.put('/whyus/:id', auth, updateWhyUs);

module.exports = router;

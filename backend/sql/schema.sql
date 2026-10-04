-- =============================================
-- Yatra K Sathi - Database Schema
-- Run this SQL in your MySQL database
-- =============================================

CREATE DATABASE IF NOT EXISTS yatra_k_sathi
  CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE yatra_k_sathi;

-- -----------------------------------------------
-- Admin Users Table
-- -----------------------------------------------
CREATE TABLE IF NOT EXISTS admins (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role ENUM('superadmin', 'admin') DEFAULT 'admin',
  is_active TINYINT(1) DEFAULT 1,
  last_login DATETIME NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- -----------------------------------------------
-- Enquiries / Leads Table
-- -----------------------------------------------
CREATE TABLE IF NOT EXISTS enquiries (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  mobile VARCHAR(20) NOT NULL,
  email VARCHAR(150) NULL,
  destination VARCHAR(100) NULL,
  service ENUM('Tour Package', 'Taxi Service', 'Hotel Booking', 'Other') DEFAULT 'Tour Package',
  travel_date DATE NULL,
  message TEXT NULL,
  source ENUM('hero_form', 'popup_form', 'contact_form', 'cta_form', 'package_form') DEFAULT 'contact_form',
  status ENUM('New', 'Contacted', 'Confirmed', 'Cancelled') DEFAULT 'New',
  admin_notes TEXT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- -----------------------------------------------
-- Page Content (CMS) Table
-- -----------------------------------------------
CREATE TABLE IF NOT EXISTS page_content (
  id INT AUTO_INCREMENT PRIMARY KEY,
  page VARCHAR(50) NOT NULL,
  section VARCHAR(100) NOT NULL,
  key_name VARCHAR(100) NOT NULL,
  value TEXT NOT NULL,
  type ENUM('text', 'html', 'json', 'number', 'boolean') DEFAULT 'text',
  label VARCHAR(150) NULL,
  updated_by INT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY unique_content (page, section, key_name),
  FOREIGN KEY (updated_by) REFERENCES admins(id) ON DELETE SET NULL
);

-- -----------------------------------------------
-- Tour Packages Table
-- -----------------------------------------------
CREATE TABLE IF NOT EXISTS packages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  location VARCHAR(100) NOT NULL,
  category VARCHAR(100) DEFAULT 'UP Tourism',
  duration VARCHAR(50) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  original_price DECIMAL(10,2) NULL,
  image_url TEXT NULL,
  description TEXT NULL,
  highlights JSON NULL,
  includes JSON NULL,
  excludes JSON NULL,
  itinerary JSON NULL,
  is_featured TINYINT(1) DEFAULT 0,
  is_active TINYINT(1) DEFAULT 1,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- -----------------------------------------------
-- Testimonials Table
-- -----------------------------------------------
CREATE TABLE IF NOT EXISTS testimonials (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  location VARCHAR(100) NULL,
  rating TINYINT DEFAULT 5,
  review TEXT NOT NULL,
  avatar_url TEXT NULL,
  is_active TINYINT(1) DEFAULT 1,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- -----------------------------------------------
-- Services Table
-- -----------------------------------------------
CREATE TABLE IF NOT EXISTS services (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  icon VARCHAR(50) NULL,
  href VARCHAR(100) NULL,
  is_active TINYINT(1) DEFAULT 1,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- -----------------------------------------------
-- Why Choose Us Table
-- -----------------------------------------------
CREATE TABLE IF NOT EXISTS why_us (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  icon VARCHAR(50) NULL,
  is_active TINYINT(1) DEFAULT 1,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- =============================================
-- DEFAULT DATA INSERTS
-- =============================================

-- Default admin (password: Admin@123)
INSERT IGNORE INTO admins (name, email, password, role) VALUES
('Super Admin', 'admin@yatraksathi.com', '$2a$10$rBnkExOhFjFN8XzNnFz8m.qiQ.d7b3S9zJHQ8T6F2Lb4X0mkVHqWu', 'superadmin');

-- Default Home Page Content
INSERT IGNORE INTO page_content (page, section, key_name, value, type, label) VALUES
('home', 'hero', 'heading', 'Travel With Comfort & Trust', 'text', 'Hero Main Heading'),
('home', 'hero', 'subheading', 'Book Taxi, Tour Packages & Hotels at Best Prices', 'text', 'Hero Sub Heading'),
('home', 'hero', 'badge1', 'Best Price Guarantee', 'text', 'Hero Badge 1'),
('home', 'hero', 'badge2', 'Trusted by 500+ Customers', 'text', 'Hero Badge 2'),
('home', 'hero', 'button1_text', 'Book Now', 'text', 'Hero Button 1 Text'),
('home', 'hero', 'button1_link', '/packages', 'text', 'Hero Button 1 Link'),
('home', 'hero', 'button2_text', 'Request a Call', 'text', 'Hero Button 2 Text'),
('home', 'hero', 'button2_link', '/contact', 'text', 'Hero Button 2 Link'),
('home', 'services', 'heading', 'Our Premium Services', 'text', 'Services Section Heading'),
('home', 'services', 'subheading', 'Everything you need for a perfect spiritual journey', 'text', 'Services Section Sub Heading'),
('home', 'packages', 'heading', 'Our Best Tour Packages', 'text', 'Packages Section Heading'),
('home', 'packages', 'subheading', 'Explore the best destinations with comfort and best prices', 'text', 'Packages Section Sub Heading'),
('home', 'whyus', 'heading', 'Why Choose Us?', 'text', 'Why Us Section Heading'),
('home', 'testimonials', 'heading', 'What Our Customers Say', 'text', 'Testimonials Section Heading'),
('home', 'cta', 'heading', 'Ready to Plan Your Dream Yatra?', 'text', 'CTA Section Heading'),
('home', 'cta', 'subheading', 'Get the best quotes instantly!', 'text', 'CTA Section Sub Heading'),
('home', 'cta', 'phone', '+91 63881 62419', 'text', 'CTA Phone Number'),
('site', 'general', 'phone', '+91 63881 62419', 'text', 'Contact Phone'),
('site', 'general', 'email', 'info@yatraksathi.com', 'text', 'Contact Email'),
('site', 'general', 'address', 'Varanasi, Uttar Pradesh, India - 221002', 'text', 'Address'),
('site', 'general', 'whatsapp', '916388162419', 'text', 'WhatsApp Number'),
('site', 'popup', 'enabled', '1', 'boolean', 'Popup Enabled'),
('site', 'popup', 'delay', '7', 'number', 'Popup Delay (seconds)'),
('site', 'popup', 'heading', 'Plan Your Dream Yatra!', 'text', 'Popup Heading'),
('site', 'popup', 'subheading', 'Get Exclusive Deals on Kashi & Ayodhya', 'text', 'Popup Sub Heading');

-- Default Services
INSERT IGNORE INTO services (title, description, icon, href, sort_order) VALUES
('Cab Booking', 'Safe & comfortable taxi service for local & outstation trips.', '🚕', '/taxi', 1),
('Hotel Booking', 'Affordable and luxury stay options near Ghats & Temples.', '🏨', '/hotels', 2),
('Tour Packages', 'Complete spiritual tour packages for Kashi, Ayodhya & Prayagraj.', '🧳', '/packages', 3),
('24/7 Support', 'Need help planning? Call us anytime for customized plans.', '📞', '/contact', 4);

-- Default Why Us
INSERT IGNORE INTO why_us (title, description, sort_order) VALUES
('Experienced Drivers', 'Professional and verified drivers for a safe journey.', 1),
('Affordable Pricing', 'Best market rates with no hidden charges.', 2),
('24/7 Support', 'We are always here to help you, anytime.', 3),
('Safe & Comfortable', 'Clean cars and safety protocols followed strictly.', 4),
('Verified Hotels', 'Handpicked hotels for a premium stay experience.', 5);

-- Default Testimonials
INSERT IGNORE INTO testimonials (name, location, rating, review, avatar_url, sort_order) VALUES
('Rohit Verma', 'New Delhi', 5, 'Varanasi trip was amazing! The driver was very polite and acted like a guide. Best service at this price point. Highly recommended for families.', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop', 1),
('Priya Sharma', 'Mumbai', 5, 'Booked a taxi for Ayodhya Darshan. The car was clean (Innova), and the journey was very comfortable. Thank you Yatraksathi team!', 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop', 2),
('Amit Singh', 'Lucknow', 4, 'Good experience with the Chardham package. Hotels were decent and food was good. Will definitely book again next year.', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop', 3);

-- Default Packages
INSERT IGNORE INTO packages (title, location, category, duration, price, original_price, image_url, description, is_featured, sort_order) VALUES
('VARANASI-KASHI-BANARAS', 'Varanasi, UP', 'VARANASI, UP', '2 Days / 1 Night', 4999, 6999, 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=800', 'Experience the spiritual heart of India. Visit the famous Kashi Vishwanath Temple, Ganga Ghats, and enjoy the evening Aarti.', 1, 1),
('GOLDEN TRIANGLE', 'Varanasi • Ayodhya • Prayagraj', 'AYODHYA, UP', '4 Days / 3 Nights', 8500, 11000, '/Ayodhya.jpg', 'Explore the golden spiritual triangle of UP - Varanasi, Ayodhya, and Prayagraj with comfortable transport and stay.', 1, 2),
('VARANASI AYODHYA', 'Uttar Pradesh', 'UP TOURISM', '3 Days / 2 Nights', 6000, 8000, 'https://images.unsplash.com/photo-1588661601662-7389c9e830e3?q=80&w=800', 'Cover both Varanasi and Ayodhya - two of India most sacred cities in one trip.', 1, 3),
('DIVYA DHAM YATRA', 'India Spiritual', 'INDIA SPIRITUAL', '6 Days / 5 Nights', 12000, 15000, 'https://images.unsplash.com/photo-1598696564619-75a8947b4d9a?q=80&w=800', 'Complete Divya Dham Yatra covering Varanasi, Ayodhya, Prayagraj & Gaya. The most comprehensive spiritual tour package.', 1, 4);

# 🚀 Yatra K Sathi - Full Stack Setup Guide

## 📁 Project Structure

```
yatri/
├── src/                    # Next.js Frontend
│   ├── app/
│   │   ├── page.js         # Home Page (with backend forms)
│   │   ├── admin/page.js   # Admin Dashboard
│   │   └── layout.js       # Layout (includes PopupForm)
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   ├── PopupForm.js    # 🆕 Popup after 7 seconds
│   │   └── WhatsAppButton.js
│   └── lib/
│       └── api.js          # 🆕 All backend API calls
├── backend/                # 🆕 Node.js + Express Backend
│   ├── server.js
│   ├── config/db.js
│   ├── routes/
│   ├── controllers/
│   ├── middleware/auth.js
│   ├── sql/schema.sql      # Run this in MySQL first!
│   └── .env
├── .env.local              # Frontend env vars
└── SETUP_GUIDE.md
```

---

## 🗄️ Step 1: Setup MySQL Database

1. Open MySQL Workbench or phpMyAdmin
2. Run the SQL file: `backend/sql/schema.sql`
3. This creates the database, all tables, and default data

---

## ⚙️ Step 2: Configure Backend

Edit `backend/.env`:
```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_mysql_password   ← CHANGE THIS
DB_NAME=yatra_k_sathi
JWT_SECRET=YatraKSathi_SuperSecret_JWT_2025  ← Can change
PORT=5000
FRONTEND_URL=http://localhost:3000
```

---

## 🖥️ Step 3: Start Backend

```bash
cd backend
npm install
node server.js
# OR for auto-restart:
npx nodemon server.js
```

Backend runs at: http://localhost:5000
Health check: http://localhost:5000/api/health

---

## 🌐 Step 4: Start Frontend

```bash
# In the main yatri/ folder
npm install
npm run dev
```

Frontend runs at: http://localhost:3000

---

## 🔐 Admin Dashboard

URL: http://localhost:3000/admin
Default Login:
- Email: `admin@yatraksathi.com`
- Password: `Admin@123`

**Dashboard Features:**
- 📊 Overview with stats
- 📋 All enquiries (filter, update status, add notes)
- 🧳 Manage tour packages (add/edit/delete)
- ⭐ Manage testimonials
- ✏️ Edit ALL page content (headings, buttons, phone numbers, etc.)
- ⚙️ Change admin password

---

## 📝 API Endpoints

### Public (No Auth Required)
```
POST /api/enquiries          Submit new enquiry
GET  /api/packages           Get all packages
GET  /api/packages/:id       Get single package
GET  /api/testimonials       Get all testimonials
GET  /api/services           Get services
GET  /api/whyus              Get why us items
GET  /api/content?page=home  Get page content
```

### Admin (JWT Required)
```
POST /api/auth/login         Login
GET  /api/auth/me            Get current admin
POST /api/auth/change-password

GET  /api/enquiries          Get all enquiries (with filters)
PUT  /api/enquiries/:id      Update enquiry status/notes
DELETE /api/enquiries/:id    Delete enquiry

GET/POST/PUT/DELETE /api/packages/:id
GET/POST/PUT/DELETE /api/testimonials/:id
PUT /api/content             Update page content
GET /api/dashboard/stats     Dashboard statistics
```

---

## 🎯 Features Implemented

- ✅ **Popup Form** - Appears 7 seconds after page load (once per session)
- ✅ **Hero Form** - Quick enquiry form in hero section
- ✅ **CTA Form** - Free quotation form in bottom section
- ✅ **Admin Login** - JWT protected dashboard
- ✅ **Enquiry Management** - View, filter, update status, add notes
- ✅ **Package CMS** - Add/edit/delete tour packages from dashboard
- ✅ **Testimonial CMS** - Manage customer reviews
- ✅ **Page Content CMS** - Edit any text on the homepage
- ✅ **Graceful Fallback** - Works even if backend is offline (shows default content)

---

## 🔧 For Production Deployment

1. Change `JWT_SECRET` to a strong random string
2. Change `ADMIN_PASSWORD` in the database
3. Set `NEXT_PUBLIC_API_URL` to your backend domain in `.env.local`
4. Use HTTPS for both frontend and backend
5. Set `FRONTEND_URL` in backend `.env` to your domain

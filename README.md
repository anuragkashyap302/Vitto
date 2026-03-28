# Vitto — AI-First BFSI Product Website + Sign-Up Stack

This repository contains a production-oriented frontend + backend implementation for Vitto.

## 1) Sitemap
Detailed product thinking is documented in [frontend/docs/sitemap-product-thinking.md](frontend/docs/sitemap-product-thinking.md).

## 2) Homepage Code
Implemented in [frontend/src/pages/HomePage.jsx](frontend/src/pages/HomePage.jsx).

## 3) Platform Page (Detailed AI modules)
Implemented in [frontend/src/pages/PlatformPage.jsx](frontend/src/pages/PlatformPage.jsx).

## 4) Full Stack Automation Page
Implemented in [frontend/src/pages/AutomationPage.jsx](frontend/src/pages/AutomationPage.jsx).

## 5) Thought Leadership Article (600–900 words)
Documented in [frontend/docs/thought-leadership.md](frontend/docs/thought-leadership.md).
Rendered on [frontend/src/pages/ArticlePage.jsx](frontend/src/pages/ArticlePage.jsx).

## 6) Full Stack Sign-Up Flow
- Frontend multi-step flow: [frontend/src/pages/SignupPage.jsx](frontend/src/pages/SignupPage.jsx)
- Backend APIs:
  - [backend/src/routes/authRoutes.js](backend/src/routes/authRoutes.js)
  - [backend/src/routes/leadRoutes.js](backend/src/routes/leadRoutes.js)
- Controllers:
  - [backend/src/controllers/authController.js](backend/src/controllers/authController.js)
  - [backend/src/controllers/leadController.js](backend/src/controllers/leadController.js)
- API examples + cURL: [backend/docs/api-reference.md](backend/docs/api-reference.md)
- Postman collection: [backend/docs/vitto-postman-collection.json](backend/docs/vitto-postman-collection.json)

## 7) Database Design
- PostgreSQL schema: [backend/database/schema.sql](backend/database/schema.sql)
- Mongo OTP model with TTL: [backend/src/models/Otp.js](backend/src/models/Otp.js)
- Design notes: [backend/docs/database-design.md](backend/docs/database-design.md)

# Testing Instructions for Evaluators

1. **Open**: https://vitto.vercel.app/signup
2. **Press F12** → Go to Network tab
3. **Enter email + phone** → Click "Send OTP"
4. **Green toast appears** with instructions
5. **In Network tab** → Find `/api/auth/send-otp` response
6. **Copy `dev_otp` value** (6-digit number)
7. **Paste into OTP field** → Continue sign-up
8. **Fill organization details** → Complete

See detailed testing guide: [TESTING_GUIDE_FOR_EVALUATORS.md](TESTING_GUIDE_FOR_EVALUATORS.md)
## 8) Deployment Guide

### Frontend (Vercel)
1. Import repository in Vercel.
2. Select project root as `frontend`.
3. Framework preset: Vite.
4. Set environment variable:
   - `VITE_API_BASE_URL=https://<backend-domain>`
5. Build command: `npm run build`
6. Output directory: `dist`

### Backend (Render or Railway)
1. Create a new Web Service with root directory `backend`.
2. Runtime: Node 18+.
3. Build command: `npm install`
4. Start command: `npm run start`
5. Configure environment variables from [backend/.env.example](backend/.env.example):
   - `PORT`
   - `NODE_ENV`
   - `CORS_ORIGIN`
   - `JWT_SECRET`
   - `JWT_EXPIRES_IN`
   - `POSTGRES_HOST`, `POSTGRES_PORT`, `POSTGRES_DB`, `POSTGRES_USER`, `POSTGRES_PASSWORD`, `POSTGRES_SSL`
   - `MONGO_URI`
6. Provision PostgreSQL and MongoDB, then apply [backend/database/schema.sql](backend/database/schema.sql).

## Local Setup

### Frontend
1. `cd frontend`
2. `npm install`
3. Copy `.env.example` to `.env`
4. `npm run dev`

### Backend
1. `cd backend`
2. `npm install`
3. Copy `.env.example` to `.env`
4. Apply [backend/database/schema.sql](backend/database/schema.sql) to PostgreSQL
5. `npm run dev`

## Project Structure

```text
Vitto/
├── frontend/
│   ├── docs/
│   │   ├── sitemap-product-thinking.md
│   │   └── thought-leadership.md
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── .env.example
│   ├── package.json
│   └── tailwind.config.js
└── backend/
    ├── database/
    │   └── schema.sql
    ├── docs/
    │   ├── api-reference.md
    │   ├── database-design.md
    │   └── vitto-postman-collection.json
    ├── src/
    │   ├── config/
    │   ├── controllers/
    │   ├── middlewares/
    │   ├── models/
    │   ├── routes/
    │   ├── services/
    │   ├── app.js
    │   └── server.js
    ├── .env.example
    └── package.json
```

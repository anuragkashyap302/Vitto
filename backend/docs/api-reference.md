# 6. Backend + APIs

Base URL: `http://localhost:5000`

## 1) POST /api/auth/send-otp

### Request
```json
{
  "email": "cto@abcnbfc.com",
  "phone": "9876543210"
}
```

### Success Response (200)
```json
{
  "message": "OTP generated successfully",
  "request_id": "otp_1711612345678",
  "dev_otp": "482913"
}
```

> `dev_otp` is included only when `NODE_ENV` is not `production`.

### cURL
```bash
curl -X POST http://localhost:5000/api/auth/send-otp \
  -H "Content-Type: application/json" \
  -d '{"email":"cto@abcnbfc.com","phone":"9876543210"}'
```

---

## 2) POST /api/auth/verify-otp

### Request
```json
{
  "email": "cto@abcnbfc.com",
  "phone": "9876543210",
  "otp": "482913"
}
```

### Success Response (200)
```json
{
  "message": "OTP verified successfully",
  "token": "eyJhbGciOiJI..."
}
```

### cURL
```bash
curl -X POST http://localhost:5000/api/auth/verify-otp \
  -H "Content-Type: application/json" \
  -d '{"email":"cto@abcnbfc.com","phone":"9876543210","otp":"482913"}'
```

---

## 3) POST /api/leads
Requires JWT in `Authorization: Bearer <token>`.

### Request
```json
{
  "email": "cto@abcnbfc.com",
  "phone": "9876543210",
  "institution_name": "ABC NBFC Ltd",
  "institution_type": "NBFC",
  "city": "Mumbai",
  "loan_book_size": 450000000
}
```

### Success Response (201)
```json
{
  "message": "Lead created",
  "data": {
    "id": 1,
    "email": "cto@abcnbfc.com",
    "phone": "9876543210",
    "institution_name": "ABC NBFC Ltd",
    "institution_type": "NBFC",
    "city": "Mumbai",
    "loan_book_size": "450000000.00",
    "status": "new",
    "created_at": "2026-03-28T12:50:00.000Z"
  }
}
```

### cURL
```bash
curl -X POST http://localhost:5000/api/leads \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <JWT_TOKEN>" \
  -d '{"email":"cto@abcnbfc.com","phone":"9876543210","institution_name":"ABC NBFC Ltd","institution_type":"NBFC","city":"Mumbai","loan_book_size":450000000}'
```

---

## 4) GET /api/leads/:id
Requires JWT.

### Success Response (200)
```json
{
  "data": {
    "id": 1,
    "email": "cto@abcnbfc.com",
    "phone": "9876543210",
    "institution_name": "ABC NBFC Ltd",
    "institution_type": "NBFC",
    "city": "Mumbai",
    "loan_book_size": "450000000.00",
    "status": "new",
    "created_at": "2026-03-28T12:50:00.000Z"
  }
}
```

### cURL
```bash
curl http://localhost:5000/api/leads/1 \
  -H "Authorization: Bearer <JWT_TOKEN>"
```

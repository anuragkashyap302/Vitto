# Vitto Assignment - Testing Guide for Evaluators

## Live Demo URLs
- **Frontend**: https://vitto-psi.vercel.app/
- **Backend**: https://vitto-api-evgs.onrender.com/health

---

## How to Test the Sign-Up Flow

### **Step 1: Go to Sign-Up Page**
```
https://vitto-psi.vercel.app/signup
```

### **Step 2: Open Developer Tools**
- Press `F12` on keyboard
- Go to **Network** tab
- Keep it visible

### **Step 3: Fill Email & Phone**
- Email: `testexample@gmail.com`
- Phone: `9876543210` (any 10-digit number)

### **Step 4: Click "Send OTP"**
- A success toast notification appears
- Look at **Network tab** → Find POST request to `/api/auth/send-otp`

### **Step 5: Get the OTP (Option A - Easiest)**

**In Network tab:**
1. Click the `/api/auth/send-otp` request
2. Go to **Response** tab
3. Look for `"dev_otp"` field
4. Copy the 6-digit number

**Example response:**
```json
{
  "message": "OTP generated successfully",
  "request_id": "otp_1711612345678",
  "dev_otp": "482913"
}
```

**Copy**: `482913`

### **Step 6: Get the OTP (Option B - Via MongoDB)**




1. Paste OTP in the form
2. Click **"Verify OTP"**
3. Fill organization details:
   - Institution name: `My Bank Inc`
   - Institution type: `NBFC` or `Bank`
   - City: `Mumbai`
   - Loan book size: `500000000`
4. Click **"Complete Sign-Up"**
5. See success message with Lead ID ✅

---

## Verify Data Was Saved





---



## API Testing (Advanced)

If they want to test via cURL:

```bash
# 1. Send OTP
curl -X POST https://vitto-api.render.com/api/auth/send-otp \
  -H "Content-Type: application/json" \
  -d '{"email":"test@company.com","phone":"9876543210"}'

# Response: {"message":"OTP generated successfully","dev_otp":"482913"}

# 2. Verify OTP (use the dev_otp from above)
curl -X POST https://vitto-api.render.com/api/auth/verify-otp \
  -H "Content-Type: application/json" \
  -d '{"email":"test@company.com","phone":"9876543210","otp":"482913"}'

# Response: {"message":"OTP verified successfully","token":"eyJhbGc..."}

# 3. Create Lead (use token from above)
curl -X POST https://vitto-api-evgs.onrender.com/api/leads \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." \
  -d '{
    "email":"test@company.com",
    "phone":"9876543210",
    "institution_name":"Test Bank",
    "institution_type":"Bank",
    "city":"Mumbai",
    "loan_book_size":500000000
  }'

# Response: {"message":"Lead created","data":{"id":1,...}}

# 4. Get Lead by ID (use token from step 2, use id from step 3)
curl https://vitto-api-evgs.onrender.com/api/leads/1 \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."

# Response: {"data":{"id":1,"email":"test@company.com",...}}
```


---

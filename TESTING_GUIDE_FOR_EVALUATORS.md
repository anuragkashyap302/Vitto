# Vitto Assignment - Testing Guide for Evaluators

## Live Demo URLs
- **Frontend**: https://vitto.vercel.app
- **Backend**: https://vitto-api.render.com

---

## How to Test the Sign-Up Flow

### **Step 1: Go to Sign-Up Page**
```
https://vitto.vercel.app/signup
```

### **Step 2: Open Developer Tools**
- Press `F12` on keyboard
- Go to **Network** tab
- Keep it visible

### **Step 3: Fill Email & Phone**
- Email: `yourname@college.com`
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

If Network tab isn't clear:

1. Go to https://cloud.mongodb.com
2. Login to your Atlas account
3. Click **Collections**
4. Find database: `vitto_otp`
5. Find collection: `otps`
6. Search for your email
7. Copy the `otp` field value

### **Step 7: Enter OTP and Complete Sign-Up**

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

### **Check PostgreSQL**
```bash
psql -h dpg-xxxxx.singapore-postgres.render.com -U vitto_user -d vitto_5no9 -c "SELECT * FROM leads;"
```
Should see your lead record.

### **Check MongoDB**
Go to MongoDB Atlas → Collections → Find OTP record with your email

---

## What Evaluators Will See

| Step | What They See |
|------|--------------|
| Open sign-up | Clean form with email/phone fields |
| Send OTP | Green toast: "OTP generated successfully" |
| Check Network | Response with `"dev_otp": "XXXXXX"` |
| Verify OTP | Form advances to Step 2 ✅ |
| Enter org details | Form advances to Step 3 ✅ |
| Submit | Success message with Lead ID ✅ |
| Check DB | Data visible in PostgreSQL ✅ |

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
curl -X POST https://vitto-api.render.com/api/leads \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer eyJhbGc..." \
  -d '{
    "email":"test@company.com",
    "phone":"9876543210",
    "institution_name":"Test Bank",
    "institution_type":"Bank",
    "city":"Mumbai",
    "loan_book_size":500000000
  }'
```

---

## Troubleshooting

### "OTP not showing in Network tab"
- Make sure you have Network tab open BEFORE clicking Send OTP
- Look for POST request to `/api/auth/send-otp`
- Click it → Response tab → Ctrl+F "dev_otp"

### "Lead not created"
- Check if OTP was verified first
- Check if all fields in organization form are filled
- Check backend logs for errors

### "Can't connect to backend"
- Verify Render backend is running: https://vitto-api.render.com/health
- Check CORS_ORIGIN in backend environment matches https://vitto.vercel.app

---

## Quick Test Checklist

- [ ] Opened https://vitto.vercel.app/signup
- [ ] Opened DevTools Network tab
- [ ] Entered email + phone
- [ ] Clicked "Send OTP"
- [ ] Found OTP in Network response
- [ ] Pasted OTP and verified
- [ ] Filled organization details
- [ ] Submitted form
- [ ] Saw success message with Lead ID
- [ ] Checked PostgreSQL → Data visible
- [ ] Checked MongoDB → OTP record exists

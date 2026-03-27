# 7. Database Design

## PostgreSQL (`leads` table)

| Column | Type | Constraint | Notes |
|---|---|---|---|
| id | BIGSERIAL | PRIMARY KEY | Unique lead identifier |
| email | VARCHAR(255) | NOT NULL | Work email from sign-up |
| phone | VARCHAR(10) | NOT NULL | 10-digit phone |
| institution_name | VARCHAR(255) | NOT NULL | Organization legal/trade name |
| institution_type | VARCHAR(100) | NOT NULL | Bank/NBFC/MFI/Fintech Lender |
| city | VARCHAR(100) | NOT NULL | Primary operating city |
| loan_book_size | NUMERIC(18,2) | NOT NULL | Loan book size in INR |
| created_at | TIMESTAMPTZ | DEFAULT NOW() | Row creation timestamp |
| status | VARCHAR(30) | DEFAULT 'new' | Lead state (`new`, `qualified`, etc.) |

SQL definition is in [database/schema.sql](../database/schema.sql).

## MongoDB (`otps` collection)

```json
{
  "_id": "ObjectId",
  "email": "risk@institution.com",
  "phone": "9876543210",
  "otp": "218904",
  "used": false,
  "createdAt": "2026-03-28T12:30:00.000Z"
}
```

- TTL index on `createdAt` with 600 seconds (10 minutes).
- Expired OTPs are deleted automatically by MongoDB.
- `used=true` prevents OTP replay even before TTL expiry.

CREATE TABLE IF NOT EXISTS leads (
  id BIGSERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(10) NOT NULL,
  institution_name VARCHAR(255) NOT NULL,
  institution_type VARCHAR(100) NOT NULL,
  city VARCHAR(100) NOT NULL,
  loan_book_size NUMERIC(18, 2) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status VARCHAR(30) NOT NULL DEFAULT 'new'
);

CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_phone ON leads(phone);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at);

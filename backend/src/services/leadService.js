import { pgPool } from '../config/db.js';

export async function createLead(leadData) {
  const query = `
    INSERT INTO leads (email, phone, institution_name, institution_type, city, loan_book_size, status)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING id, email, phone, institution_name, institution_type, city, loan_book_size, status, created_at;
  `;

  const values = [
    leadData.email,
    leadData.phone,
    leadData.institution_name,
    leadData.institution_type,
    leadData.city,
    leadData.loan_book_size,
    'new',
  ];

  const { rows } = await pgPool.query(query, values);
  return rows[0];
}

export async function getLeadById(id) {
  const { rows } = await pgPool.query(
    'SELECT id, email, phone, institution_name, institution_type, city, loan_book_size, status, created_at FROM leads WHERE id = $1',
    [id]
  );
  return rows[0] || null;
}

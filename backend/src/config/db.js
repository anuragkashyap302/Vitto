import mongoose from 'mongoose';
import pkg from 'pg';
import env from './env.js';

const { Pool } = pkg;

export const pgPool = new Pool({
  host: env.postgres.host,
  port: env.postgres.port,
  database: env.postgres.database,
  user: env.postgres.user,
  password: env.postgres.password,
  ssl: env.postgres.ssl,
});

export async function connectDatabases() {
  await pgPool.query('SELECT 1');
  await mongoose.connect(env.mongoUri);
}

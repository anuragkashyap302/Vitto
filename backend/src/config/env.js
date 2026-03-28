import dotenv from 'dotenv';
import { URL } from 'url';

dotenv.config();

function parsePostgresUrl(urlString) {
  try {
    const url = new URL(urlString);
    return {
      host: url.hostname,
      port: Number(url.port || 5432),
      database: url.pathname.slice(1),
      user: url.username,
      password: url.password,
      ssl: url.hostname.includes('render.com') ? { rejectUnauthorized: false } : false,
    };
  } catch (error) {
    return null;
  }
}

const postgresConfig = process.env.DATABASE_URL
  ? parsePostgresUrl(process.env.DATABASE_URL)
  : {
      host: process.env.POSTGRES_HOST || 'localhost',
      port: Number(process.env.POSTGRES_PORT || 5432),
      database: process.env.POSTGRES_DB || 'vitto',
      user: process.env.POSTGRES_USER || 'postgres',
      password: process.env.POSTGRES_PASSWORD || 'postgres',
      ssl: process.env.POSTGRES_SSL === 'true' ? { rejectUnauthorized: false } : false,
    };

const env = {
  port: Number(process.env.PORT || 5000),
  nodeEnv: process.env.NODE_ENV || 'development',
  corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  jwtSecret: process.env.JWT_SECRET || 'change-me-in-production',
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '2h',
  postgres: postgresConfig,
  mongoUri: process.env.MONGO_URI || 'mongodb://localhost:27017/vitto_otp',
};

export default env;

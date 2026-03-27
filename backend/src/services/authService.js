import jwt from 'jsonwebtoken';
import env from '../config/env.js';
import Otp from '../models/Otp.js';

function generateOtp() {
  return String(Math.floor(100000 + Math.random() * 900000));
}

export async function createOtpRecord({ email, phone }) {
  const otp = generateOtp();
  await Otp.create({ email, phone, otp });
  return otp;
}

export async function verifyOtpRecord({ email, phone, otp }) {
  const latestOtp = await Otp.findOne({ email, phone, used: false }).sort({ createdAt: -1 });
  if (!latestOtp) return false;
  if (latestOtp.otp !== otp) return false;

  latestOtp.used = true;
  await latestOtp.save();
  return true;
}

export function signAuthToken(payload) {
  return jwt.sign(payload, env.jwtSecret, { expiresIn: env.jwtExpiresIn });
}

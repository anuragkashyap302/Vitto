import { createOtpRecord, signAuthToken, verifyOtpRecord } from '../services/authService.js';

export async function sendOtp(req, res, next) {
  try {
    const { email, phone } = req.body;
    const otp = await createOtpRecord({ email, phone });

    return res.status(200).json({
      message: 'OTP generated successfully',
      request_id: `otp_${Date.now()}`,
      ...(process.env.NODE_ENV !== 'production' ? { dev_otp: otp } : {}),
    });
  } catch (error) {
    return next(error);
  }
}

export async function verifyOtp(req, res, next) {
  try {
    const { email, phone, otp } = req.body;
    const isValid = await verifyOtpRecord({ email, phone, otp });

    if (!isValid) {
      return res.status(401).json({ message: 'Invalid or expired OTP' });
    }

    const token = signAuthToken({ email, phone });
    return res.status(200).json({
      message: 'OTP verified successfully',
      token,
    });
  } catch (error) {
    return next(error);
  }
}

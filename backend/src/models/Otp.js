import mongoose from 'mongoose';

const otpSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, index: true },
    phone: { type: String, required: true, index: true },
    otp: { type: String, required: true },
    used: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now, expires: 600 },
  },
  {
    versionKey: false,
  }
);

const Otp = mongoose.model('Otp', otpSchema);

export default Otp;

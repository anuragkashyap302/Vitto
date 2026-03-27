import { Router } from 'express';
import { body } from 'express-validator';
import { sendOtp, verifyOtp } from '../controllers/authController.js';
import { validateRequest } from '../middlewares/validationMiddleware.js';

const router = Router();

const emailValidator = body('email').isEmail().withMessage('Valid email is required').normalizeEmail();
const phoneValidator = body('phone').matches(/^\d{10}$/).withMessage('Phone must be a 10-digit number');

router.post('/send-otp', [emailValidator, phoneValidator], validateRequest, sendOtp);
router.post(
  '/verify-otp',
  [emailValidator, phoneValidator, body('otp').matches(/^\d{6}$/).withMessage('OTP must be 6 digits')],
  validateRequest,
  verifyOtp
);

export default router;

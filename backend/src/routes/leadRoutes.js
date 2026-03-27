import { Router } from 'express';
import { body, param } from 'express-validator';
import { createLeadController, getLeadByIdController } from '../controllers/leadController.js';
import { authenticateJwt } from '../middlewares/authMiddleware.js';
import { validateRequest } from '../middlewares/validationMiddleware.js';

const router = Router();

router.post(
  '/',
  authenticateJwt,
  [
    body('email').isEmail().withMessage('Valid email is required').normalizeEmail(),
    body('phone').matches(/^\d{10}$/).withMessage('Phone must be a 10-digit number'),
    body('institution_name').isLength({ min: 2 }).withMessage('Institution name is required'),
    body('institution_type').isLength({ min: 2 }).withMessage('Institution type is required'),
    body('city').isLength({ min: 2 }).withMessage('City is required'),
    body('loan_book_size').isNumeric().withMessage('Loan book size must be numeric'),
  ],
  validateRequest,
  createLeadController
);

router.get('/:id', authenticateJwt, [param('id').isInt().withMessage('id must be integer')], validateRequest, getLeadByIdController);

export default router;

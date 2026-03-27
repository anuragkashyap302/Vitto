import cors from 'cors';
import express from 'express';
import env from './config/env.js';
import authRoutes from './routes/authRoutes.js';
import leadRoutes from './routes/leadRoutes.js';
import { globalErrorHandler, notFoundHandler } from './middlewares/errorMiddleware.js';

const app = express();

app.use(
  cors({
    origin: env.corsOrigin,
  })
);
app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', service: 'vitto-backend' });
});

app.use('/api/auth', authRoutes);
app.use('/api/leads', leadRoutes);

app.use(notFoundHandler);
app.use(globalErrorHandler);

export default app;

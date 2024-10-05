import express, { Request, Response } from 'express';
import paymentRouter from './payment.route';
import productRouter from './product.route';
import registerRouter from './register';
import resetRouter from './reset.route';
import shopRouter from './shop.routes';
import adminRouter from './adminRoute';
import orderRouter from './order.route';
import { authorizeRole } from '../middlewares/admin';

const indexRouter = express.Router();

/* Home route. */
indexRouter.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Welcome to traidr API 🚀' });
});

/* Reset routes. */
indexRouter.use('/reset', resetRouter);

/* Register routes. */
indexRouter.use('', registerRouter);

/* Product routes. */
indexRouter.use('/products', productRouter);

// Shop Routes
indexRouter.use('/shop', shopRouter);

// Payment Routes
indexRouter.use('/payment', paymentRouter);

// Admin Routtes
indexRouter.use('/admin', adminRouter);

indexRouter.use('/orders', orderRouter)

// Notification Route
indexRouter.get('/notifications/count', (req: Request, res: Response) => {
  const count = Math.floor(Math.random() * 10) + 1;
  return res.status(200).json({ message: 'Notification count', count });
});

export default indexRouter;
 
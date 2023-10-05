import express, { Request, Response, NextFunction } from 'express';
import homeController from '../../controllers/homeController';
import CustomError from '../../errors/CustomError';
import ValidationError from '../../errors/ValidationError';

const Home = express.Router();

Home.get('/', homeController.get);
Home.post('/', homeController.post);
Home.get('/error', (req: Request, res: Response, next: NextFunction) => {
  throw new ValidationError('teste', '500');
  res.json({ error: 'teste' });
});

export default Home;

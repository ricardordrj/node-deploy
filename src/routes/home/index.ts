import express from 'express';
import homeController from '../../controllers/homeController';

const Home = express.Router();

Home.get('/', homeController.get);
Home.post('/', homeController.post);

export default Home;

import express from 'express';
import Home from './home';
import Healthcheck from './healthCheck';

const router = express();

router.use('/', Home);
router.use('/healthcheck', Healthcheck);

export default router;

import http from 'http';
import express, { Application } from 'express';
import bodyParser from 'body-parser';
import router from './routes';
import globalErrorHandler from './middlewares/globalErrorHandler';

const port = process.env.PORT || 3030;

const app: Application = express();
const server = http.createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(router);

// Error Middleware
app.use('*', globalErrorHandler);

server.listen(port, () => {
  console.log(`app is runing`);
});

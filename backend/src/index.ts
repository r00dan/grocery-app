import express from 'express';
import cors from 'cors';

import { routes } from './routes';
import { database } from './db';

const app = express();
const port = process.env.BACKEND_PORT ?? 4000;
const whitelist = ['http://localhost:3000'];

async function bootstrap() {
  await database.initialize();
  
  app.use(cors({
    origin: whitelist,
  }));

  app.use(express.json());
  
  app.use('/', routes);

  app.listen(port, () => console.log(`Server has been started on port ${port}`));
};

bootstrap();

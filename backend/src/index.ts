import express from 'express';

import { routes } from './routes';
import { database } from './db';

const app = express();
const port = process.env.BACKEND_PORT ?? 4000;

async function bootstrap() {
  await database.initialize();
  
  app.use(express.json());
  app.use('/', routes);

  app.listen(port, () => console.log(`Server has been started on port ${port}`));
};

bootstrap();

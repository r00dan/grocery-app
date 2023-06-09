import express from 'express';

import { productRoute } from './product.route';

export const routes = express.Router();

routes.use(productRoute);

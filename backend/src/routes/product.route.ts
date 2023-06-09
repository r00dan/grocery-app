import {
  type Request,
  type Response,
  Router,
} from 'express';

import { database } from '../db';
import { Product } from '../entities';
import { HttpStatusCode } from '../utils/httpStatusCodes';


export const productRoute = Router();
const productRepository = database.getRepository(Product);

productRoute.get('/api/product', async (_: Request, res: Response) => {
  const products = await productRepository.find();
  res.status(HttpStatusCode.OK).json(products);
});

productRoute.post('/api/product', async ({ body }: Request, res: Response) => {
  const newProduct = productRepository.create({
    ...body,
  });

  await productRepository.save(newProduct);

  res.status(HttpStatusCode.CREATED).json(newProduct);
});

productRoute.delete('/api/product/:id', async ({ params: { id } }: Request, res: Response) => {
  const candidate = await productRepository.findOne({ where: { id } });

  if (!candidate) {
    res
      .status(HttpStatusCode.BAD_REQUEST)
      .json({ message: `Can't find product with id: ${id}` });
    
    return;
  }

  await productRepository.remove(candidate);

  res.status(HttpStatusCode.DELETED).json(candidate);
});
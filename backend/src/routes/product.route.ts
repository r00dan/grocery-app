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
const route = '/api/product';

productRoute.get(route, async (_: Request, res: Response) => {
  const products = await productRepository.find();
  res.status(HttpStatusCode.OK).json(products);
});

productRoute.post(route, async ({ body }: Request, res: Response) => {
  const newProduct = productRepository.create({
    ...body,
  });

  await productRepository.save(newProduct);

  res.status(HttpStatusCode.CREATED).json(newProduct);
});

productRoute.put(`${route}/:id`, async ({ params: { id }, body }: Request, res: Response) => {
  const candidate = await productRepository.findOne({ where: { id } });

  if (!candidate) {
    res
      .status(HttpStatusCode.BAD_REQUEST)
      .json({ message: `Can't find product with id: ${id}` });
    
    return;
  }

  await productRepository.update({ id }, { ...body, id });

  res.status(HttpStatusCode.OK).json({ ...candidate, ...body });
});

productRoute.delete(`${route}/:id`, async ({ params: { id } }: Request, res: Response) => {
  const candidate = await productRepository.findOne({ where: { id } });

  if (!candidate) {
    res
      .status(HttpStatusCode.BAD_REQUEST)
      .json({ message: `Can't find product with id: ${id}` });
    
    return;
  }

  await productRepository.remove(candidate);

  res.status(HttpStatusCode.DELETED).json({ message: `Successfuly removed product with id: ${id}` });
});
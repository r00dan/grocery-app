import { API_URL } from '@/app/constants';
import { ProductDataType } from '@/app/types';

interface UpdateProductBody extends Partial<ProductDataType> { };
interface UpdateProductOptions {
  productId: string;
  body: UpdateProductBody;
}

export async function updateProduct({ productId, body }: UpdateProductOptions) {
  const response = await fetch(`${API_URL}/product/${productId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  return await response.json();
};
import { API_URL } from '@/constants/constants';
import { ProductDataType } from '@/constants/types';

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
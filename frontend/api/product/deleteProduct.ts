import { API_URL } from '@/app/constants';

export async function deleteProduct(productId: string) {
  const response = await fetch(`${API_URL}/product/${productId}`, {
    method: 'DELETE',
  });
  return await response.json();
};
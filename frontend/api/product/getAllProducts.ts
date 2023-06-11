import { API_URL } from '@/app/constants';
import { ProductDataType } from '../../../shared/types';

export async function getAllProducts(): Promise<ProductDataType[]> {
  console.log('getAllProducts');
  const response = await fetch(`${API_URL}/product`, {
    method: 'GET',
    cache: "no-store",
  });
  return await response.json();
};
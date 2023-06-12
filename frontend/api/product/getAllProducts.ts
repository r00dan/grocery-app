import { API_URL } from '@/constants/constants';

export async function getAllProducts() {
  const response = await fetch(`${API_URL}/product`, {
    method: 'GET',
    cache: "no-store",
  });
  return await response.json();
};
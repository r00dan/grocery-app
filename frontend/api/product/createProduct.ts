import { nanoid } from 'nanoid';

import { API_URL } from '@/constants/constants';

export async function createProduct(title: string) {
  const response = await fetch(`${API_URL}/product`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: nanoid(), title }),
  });
  return await response.json();
};
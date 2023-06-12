export enum ProductStatuses {
  UNDONE = 'undone',
  DONE = 'done',
}

export interface ProductDataType {
  id: string;
  title: string;
  count: number;
  status: ProductStatuses;
};
export class Store {
  id: number;
  name: string;
  category?: string;
  country?: string;
  description?: string;
  createdAt: number;
  updatedAt?: number;
  edited?: boolean;
  editedByUsername?: string;
}

type ID = number | string;

export interface CRUDInterface<T> {
  create(item: T): void;
  read(filter?: (item: T) => boolean): T[];
  update(id: ID, item: T): void;
  delete(id: ID): void;
}

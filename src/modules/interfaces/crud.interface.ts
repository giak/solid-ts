type ID = number | string;

/**
 * Represents a CRUD (Create, Read, Update, Delete) interface.
 * @template T - The type of the item being manipulated.
 */
export interface CRUDInterface<T> {
  /**
   * Creates a new item.
   * @param item - The item to be created.
   */
  create(item: T): void;

  /**
   * Reads items based on an optional filter.
   * @param filter - An optional filter function to apply on the items.
   * @returns An array of items that match the filter (if provided), otherwise all items.
   */
  read(filter?: (item: T) => boolean): T[];

  /**
   * Updates an item with the specified ID.
   * @param id - The ID of the item to be updated.
   * @param item - The updated item.
   */
  update(id: ID, item: T): void;

  /**
   * Deletes an item with the specified ID.
   * @param id - The ID of the item to be deleted.
   */
  delete(id: ID): void;
}

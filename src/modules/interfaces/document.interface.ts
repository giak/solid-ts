import type { CRUDInterface } from './crud.interface';

/**
 * DocumentInterface is an interface for a Document.
 * @interface
 * @property {number} id - The ID of the document.
 * @property {string} title - The title of the document.
 * @property {string} author - The author of the document.
 * @property {number} publicationYear - The year the document was published.
 * @property {boolean} available - The availability of the document.
 */
export interface DocumentInterface {
  id: number;
  title: string;
  author: string;
  publicationYear: number;
  available: boolean;
}

export interface DocumentManagerInterface extends CRUDInterface<DocumentInterface> {
  borrow(title: string, available: boolean): void;
}

import type { CRUDInterface } from './crud.interface';
import type { DocumentType } from '@packages/document/DocumentFactory';

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
  type: DocumentType;
}

export interface DocumentOperationInterface extends DocumentInterface {
  getType(): string;
  getContent(): string;
}

/**
 * Represents the interface for managing documents.
 * Extends the CRUDInterface and adds a method for borrowing documents.
 * @interface DocumentManagerInterface
 * @extends {CRUDInterface<DocumentInterface>}
 */
export interface DocumentManagerInterface extends CRUDInterface<DocumentInterface> {
  /**
   * Borrows a document with the specified title and availability status.
   * @param title - The title of the document to borrow.
   * @param available - The availability status of the document.
   */
  borrow(title: string, available: boolean): void;
}

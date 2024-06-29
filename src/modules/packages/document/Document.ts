import type { DocumentOperationInterface } from '@interfaces/document.interface';
import type { DocumentType } from '@packages/document/DocumentFactory';

/**
 * Document is a class that implements the DocumentInterface.
 * @class
 * @implements {DocumentOperationInterface}
 */
export class Document implements DocumentOperationInterface {
  constructor(
    public id: number,
    public title: string,
    public author: string,
    public publicationYear: number,
    public type: DocumentType,
    public available = true,
  ) {}

  /**
   * getType returns the type of the document.
   * @returns {string}
   */
  getType(): string {
    return 'Document';
  }

  /**
   * getContent returns the content of the document.
   * @returns {string}
   *  */
  getContent(): string {
    return 'Document content';
  }
}

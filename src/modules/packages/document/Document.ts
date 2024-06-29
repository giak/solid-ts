import type { DocumentInterface } from '@interfaces/document.interface';
import type { DocumentType } from '@packages/document/DocumentFactory';

/**
 * Document is a class that implements the DocumentInterface.
 * @class
 * @implements {DocumentInterface}
 */
export class Document implements DocumentInterface {
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

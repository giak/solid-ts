import type { Document } from './Document';
import type { DocumentInterface, DocumentManagerInterface } from '@interfaces/document.interface';
import { DocumentErrorHandler } from './ErrorHandler';
import { DocumentFactory } from './DocumentFactory';

/**
 * Manages a collection of documents and provides operations to create, update, delete, borrow, and read documents.
 * @class DocumentManager
 * @implements {DocumentManagerInterface}
 */
export class DocumentManager implements DocumentManagerInterface {
  private documents: DocumentInterface[] = [];
  private documentErrorHandler: DocumentErrorHandler = new DocumentErrorHandler();

  create(document: DocumentInterface): void {
    this.documentErrorHandler.throwIfDocumentExists(this.documents, document);
    const newDocument = DocumentFactory.createDocument(document);
    this.documents.push(newDocument);
  }

  update(documentTitle: string, updatedDocument: DocumentInterface) {
    this.documentErrorHandler.throwIfDocumentNotFound(this.documents, documentTitle);
    const index = this.documents.findIndex((doc) => doc.title === documentTitle);
    this.documents[index] = updatedDocument;
  }

  delete(title: string): void {
    const index = this.documents.findIndex((doc) => doc.title === title);
    if (index === -1) {
      throw new Error('No document with this title was found.');
    }
    this.documents.splice(index, 1);
  }

  borrow(title: string, available: boolean): DocumentInterface {
    const document = this.documents.find((doc) => doc.title === title && doc.available === !available);

    if (!document) {
      throw new Error(`No ${available ? 'borrowed' : 'available'} document with this title was found.`);
    }
    document.available = available;
    return document;
  }

  read(filter?: (doc: DocumentInterface) => boolean): DocumentInterface[] {
    if (filter) {
      return this.documents.filter(filter);
    }
    return [...this.documents];
  }
}

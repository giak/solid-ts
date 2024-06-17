import type { Document } from './Document';
import type { DocumentInterface, DocumentManagerInterface } from '@interfaces/document.interface';
import { DocumentErrorHandler } from './ErrorHandler';

export class DocumentManager implements DocumentManagerInterface {
  private documents: DocumentInterface[] = [];
  private documentErrorHandler: DocumentErrorHandler = new DocumentErrorHandler();

  create(document: DocumentInterface): void {
    this.documentErrorHandler.throwIfDocumentExists(this.documents, document);
    this.documents.push(document);
  }

  update(documentTitle: string, updatedDocument: Document) {
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

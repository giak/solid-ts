import { Book } from '@packages/document/book/Book';
import { Journal } from '@packages/document/journal/Journal';
import { Paper } from '@packages/document/paper/Paper';
import type { Document } from '@packages/document/Document';
import type { DocumentInterface } from '@interfaces/document.interface';

/**
 * DocumentType is an enum that contains the document types.
 * @enum {string}
 */
export enum DocumentType {
  PAPER = 'Paper',
  BOOK = 'Book',
  JOURNAL = 'Journal',
}

/**
 * documentClassMap is a map that contains the document types and their corresponding classes.
 * @type {Map<DocumentType, new (...args: any[]) => Document>}
 */
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const documentClassMap = new Map<DocumentType, new (...args: any[]) => Document>([
  [DocumentType.PAPER, Paper],
  [DocumentType.BOOK, Book],
  [DocumentType.JOURNAL, Journal],
]);

/**
 * DocumentFactory is a class that creates a document based on the document type.
 * @class DocumentFactory
 * @static createDocument
 * @throws {Error} Document type is not recognized.
 * @returns {Document}
 */
// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export class DocumentFactory {
  static createDocument(document: DocumentInterface): Document {
    const DocumentClass = documentClassMap.get(document.type);
    if (!DocumentClass) {
      throw new Error(`Document type '${document.type}' is not recognized.`);
    }
    return new DocumentClass(
      document.id,
      document.title,
      document.author,
      document.publicationYear,
      document.type,
      document.available,
    );
  }
}

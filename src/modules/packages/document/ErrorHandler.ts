import type { DocumentInterface } from '@interfaces/document.interface';

export class DocumentErrorHandler {
  throwIfDocumentExists(documents: DocumentInterface[], document: DocumentInterface) {
    if (documents.some((doc) => doc.title === document.title)) {
      throw new Error('A document with this title already exists.');
    }
  }

  throwIfDocumentNotFound(documents: DocumentInterface[], documentTitle: string) {
    const index = documents.findIndex((doc) => doc.title === documentTitle);
    if (index === -1) {
      throw new Error('No document with this title was found.');
    }
  }
}

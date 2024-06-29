import { Document } from '@packages/document/Document';
import type { DocumentType } from '@packages/document/DocumentFactory';

/**
 * Journal is a class that extends the Document class.
 * @class
 * @extends {Document}
 */
export class Journal extends Document {
  constructor(
    public id: number,
    public title: string,
    public author: string,
    public publicationYear: number,
    public type: DocumentType,
    public available: boolean,
  ) {
    super(id, title, author, publicationYear, type, available);
  }

  getType(): string {
    return 'Journal';
  }

  getContent(): string {
    return 'Journal Content';
  }
}

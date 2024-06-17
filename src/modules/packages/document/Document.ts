import type { DocumentInterface } from '@interfaces/document.interface';

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
    public available = true,
  ) {}
}

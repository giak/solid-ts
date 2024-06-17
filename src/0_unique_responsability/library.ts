import type { DocumentInterface } from '@interfaces/document.interface';
import type { StudentInterface } from '@interfaces/student.interface';
import type { Document } from '@packages/document/Document';

/**
 * LibraryInterface is an interface that defines the methods that a Library class should implement.
 * @interface
 * @method createDocument - Creates a new document and adds it to the library.
 * @method updateDocument - Updates an existing document in the library.
 * @method deleteDocument - Deletes a document from the library.
 * @method borrowDocument - Borrows or returns a document.
 * @method readDocument - Returns all documents in the library or a subset of them.
 * @method createStudent - Creates a new student and adds them to the library.
 * @method updateStudent - Updates an existing student in the library.
 * @method deleteStudent - Deletes a student from the library.
 * @method readStudent - Returns all students in the library or a subset of them.
 */
interface LibraryInterface {
  createDocument(document: DocumentInterface): void;
  updateDocument(documentTitle: string, updatedDocument: Document): void;
  deleteDocument(title: string): void;
  borrowDocument(title: string, available: boolean): void;
  readDocument(filter?: (doc: DocumentInterface) => boolean): DocumentInterface[];
  createStudent(student: StudentInterface): void;
  updateStudent(studentId: number, updatedStudent: StudentInterface): void;
  deleteStudent(id: number): void;
  readStudent(filter?: (stu: StudentInterface) => boolean): StudentInterface[];
}

/**
 * Library is a class that implements the LibraryInterface.
 * @class
 * @implements {LibraryInterface}
 */
export class Library implements LibraryInterface {
  private documents: DocumentInterface[] = [];
  private students: StudentInterface[] = [];

  createDocument(document: DocumentInterface): void {
    if (this.documents.some((doc) => doc.title === document.title)) {
      throw new Error('A document with this title already exists.');
    }
    this.documents.push(document);
  }

  updateDocument(documentTitle: string, updatedDocument: Document) {
    const index = this.documents.findIndex((doc) => doc.title === documentTitle);
    if (index === -1) {
      throw new Error('No document with this title was found.');
    }
    this.documents[index] = updatedDocument;
  }

  deleteDocument(title: string): void {
    const index = this.documents.findIndex((doc) => doc.title === title);
    if (index === -1) {
      throw new Error('No document with this title was found.');
    }
    this.documents.splice(index, 1);
  }

  borrowDocument(title: string, available: boolean): DocumentInterface {
    const document = this.documents.find((doc) => doc.title === title && doc.available === !available);

    if (!document) {
      throw new Error(`No ${available ? 'borrowed' : 'available'} document with this title was found.`);
    }
    document.available = available;
    return document;
  }

  readDocument(filter?: (doc: DocumentInterface) => boolean): DocumentInterface[] {
    if (filter) {
      return this.documents.filter(filter);
    }
    return [...this.documents];
  }

  createStudent(student: StudentInterface): void {
    if (this.students.some((stu) => stu.id === student.id)) {
      throw new Error('A student with this ID already exists.');
    }
    this.students.push(student);
  }

  updateStudent(studentId: number, updatedStudent: StudentInterface) {
    const index = this.students.findIndex((student) => student.id === studentId);
    if (index === -1) {
      throw new Error('No student with this ID was found.');
    }
    this.students[index] = updatedStudent;
  }

  deleteStudent(id: number): void {
    const index = this.students.findIndex((stu) => stu.id === id);
    if (index === -1) {
      throw new Error('No student with this ID was found.');
    }
    this.students.splice(index, 1);
  }

  readStudent(filter?: (stu: StudentInterface) => boolean): StudentInterface[] {
    if (filter) {
      return this.students.filter(filter);
    }
    return [...this.students];
  }
}

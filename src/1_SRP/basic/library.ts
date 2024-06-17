import type { DocumentInterface } from '@interfaces/document.interface';
import type { StudentInterface } from '@interfaces/student.interface';
import { DocumentManager } from '@packages/document';
import { StudentManager } from '@packages/student';

export class Library {
  private documentManager: DocumentManager = new DocumentManager();
  private studentManager: StudentManager = new StudentManager();

  createDocument(document: DocumentInterface): this {
    this.documentManager.create(document);
    return this;
  }

  readDocument(filter?: (doc: DocumentInterface) => boolean): DocumentInterface[] {
    return this.documentManager.read(filter);
  }

  borrowDocument(documentTitle: string, available: boolean): DocumentInterface {
    return this.documentManager.borrow(documentTitle, available);
  }

  updateDocument(documentTitle: string, document: DocumentInterface): this {
    this.documentManager.update(documentTitle, document);
    return this;
  }

  deleteDocument(documentTitle: string): this {
    this.documentManager.delete(documentTitle);
    return this;
  }

  createStudent(student: StudentInterface): this {
    this.studentManager.create(student);
    return this;
  }

  readStudent(filter?: (stu: StudentInterface) => boolean): StudentInterface[] {
    return this.studentManager.read(filter);
  }

  updateStudent(studentId: number, student: StudentInterface): this {
    this.studentManager.update(studentId, student);
    return this;
  }

  deleteStudent(studentId: number): this {
    this.studentManager.delete(studentId);
    return this;
  }
}

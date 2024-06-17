import type { Student } from './Student';
import type { StudentInterface, StudentManagerInterface } from '@interfaces/student.interface';
import { StudentErrorHandler } from './ErrorHandler';

export class StudentManager implements StudentManagerInterface {
  private students: Student[] = [];
  private studentErrorHandler: StudentErrorHandler = new StudentErrorHandler();

  create(student: StudentInterface): void {
    this.studentErrorHandler.throwIfStudentExists(this.students, student);
    this.students.push(student);
  }

  update(studentId: number, updatedStudent: StudentInterface) {
    this.studentErrorHandler.throwIfStudentNotFound(this.students, studentId);
    const index = this.students.findIndex((student) => student.id === studentId);
    this.students[index] = updatedStudent;
  }

  delete(id: number): void {
    const index = this.students.findIndex((stu) => stu.id === id);
    if (index === -1) {
      throw new Error('No student with this ID was found.');
    }
    this.students.splice(index, 1);
  }

  read(filter?: (stu: StudentInterface) => boolean): StudentInterface[] {
    if (filter) {
      return this.students.filter(filter);
    }
    return [...this.students];
  }
}

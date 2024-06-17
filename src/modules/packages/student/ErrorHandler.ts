import type { StudentInterface } from '@interfaces/student.interface';

export class StudentErrorHandler {
  throwIfStudentExists(students: StudentInterface[], student: StudentInterface) {
    if (students.some((stu) => stu.id === student.id)) {
      throw new Error('A student with this ID already exists.');
    }
  }

  throwIfStudentNotFound(students: StudentInterface[], studentId: number) {
    const index = students.findIndex((student) => student.id === studentId);
    if (index === -1) {
      throw new Error('No student with this ID was found.');
    }
  }
}

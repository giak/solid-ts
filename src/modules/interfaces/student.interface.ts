import type { CRUDInterface } from './crud.interface';

/**
 * StudentInterface is an interface for a Student.
 * @interface
 * @property {string} firstName - The first name of the student.
 * @property {string} lastName - The last name of the student.
 * @property {number} id - The id of the student.
 * @property {number} yearOfAdmission - The year the student was admitted (optional).
 */
export interface StudentInterface {
  firstName: string;
  lastName: string;
  id: number;
  yearOfAdmission?: number;
}

export interface StudentManagerInterface extends CRUDInterface<StudentInterface> {}

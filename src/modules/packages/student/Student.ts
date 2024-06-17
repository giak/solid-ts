import type { StudentInterface } from '@interfaces/student.interface';

/**
 * Student is a class that implements the StudentInterface.
 * @class
 * @implements {StudentInterface}
 */
export class Student implements StudentInterface {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public yearOfAdmission?: number,
  ) {}
}

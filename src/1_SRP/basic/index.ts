// Run the tests

import { Library } from './library';
import type { StudentInterface } from '@interfaces/student.interface';
import type { DocumentInterface } from '@interfaces/document.interface';

// But here's an example of how you can use the library:
// Example 1: Creating a new student and a new document in the library
console.warn('Example 1: Creating a new student and a new document in the library');
const library = new Library();

const newStudent: StudentInterface = {
  id: 1,
  firstName: 'John',
  lastName: 'Doe',
  yearOfAdmission: 2020,
};

const newDocument: DocumentInterface = {
  id: 1,
  title: 'Introduction to Algebra',
  author: 'Jane Smith',
  publicationYear: 2021,
  available: true,
};

library.createStudent(newStudent).createDocument(newDocument);
console.log('library list all students ', library.readStudent());
console.log('library list all documents ', library.readDocument());

// Example 2: Updating a student and a document in the library
library.updateStudent(1, { ...newStudent, yearOfAdmission: 2021 }); // Updating the age of the student
library.updateDocument('Introduction to Algebra', {
  ...newDocument,
  available: false,
});

console.log(
  'library read student updated ',
  library.readStudent((student) => student.id === 1),
);
console.log(
  'library read document updated ',
  library.readDocument((document) => document.title === 'Introduction to Algebra'),
);

// Example 3: Deleting a student and a document from the library
library.deleteStudent(1);
library.deleteDocument('Introduction to Algebra');
